import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Blog, BlogCollapseType } from './blog';
import { BlogDetailComponent } from './blog-detail.component';
import { BlogService } from './blog.service';

@Component({
	selector: 'blog-overview',
	directives: [ BlogDetailComponent ],
	templateUrl: 'app/blog/blog-overview.template.html'
})
export class BlogOverviewComponent implements OnInit, OnDestroy {
	
	subSearch: any;
	subBlogs: any;
	
	constructor(private route: ActivatedRoute, private service: BlogService) {}
	
	ngOnInit() {
		this.subBlogs = this.service.getBlogs().subscribe(
			blogs => this.blogs = blogs,
			error => 0
		);
		
		this.filteredBlogs = this.blogs;
		
		this.subSearch = this.route.params
			.subscribe((params) => {
				let search = params['search'];
				if(search !== undefined)
					this.filter(search);
		});
	}
	
	ngOnDestroy() {
		if(this.subSearch !== undefined)
			this.subSearch.unsubscribe();
		
		if(this.subBlogs !== undefined)
			this.subBlogs.unsubscribe();
	}
	
	blogs: Array<Blog>;	
	filteredBlogs: Array<Blog>;
	
	public filter(by: string) {
		let search = decodeURIComponent(by);
		let f = (whole, part) => whole.startsWith(part);
		this.filteredBlogs = this.blogs.filter(b => f(b.title, search) || b.keywords.indexOf(search) != -1)
	}
}


