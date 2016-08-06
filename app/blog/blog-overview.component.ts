import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Blog, BlogCollapseType } from './blog';
import { BlogDetailComponent } from './blog-detail.component';

@Component({
	selector: 'blog-overview',
	directives: [ BlogDetailComponent ],
	templateUrl: 'app/blog/blog-overview.template.html'
})
export class BlogOverviewComponent implements OnInit, OnDestroy {
	
	sub: any
	
	constructor(private route: ActivatedRoute) {
	}
	
	ngOnInit() {
		this.blogs = [
			new Blog("First Entry"),
			new Blog("Second Entry that is so very very long that it should wrap over lines")
		]
		
		this.filteredBlogs = this.blogs;
		
		this.sub = this.route.params
			.subscribe((params) => {
				let search = params['search'];
				if(search !== undefined)
					this.filter(search);
		});
	}
	
	ngOnDestroy() {
		if(this.sub !== undefined)
			this.sub.unsubscribe();
		this.sub = undefined;
	}
	
	blogs: Array<Blog>;	
	filteredBlogs: Array<Blog>;
	
	public filter(by: string) {
		let search = decodeURIComponent(by);
		let f = (whole, part) => whole.startsWith(part);
		this.filteredBlogs = this.blogs.filter(b => f(b.title, search) || b.keywords.indexOf(search) != -1)
	}
}


