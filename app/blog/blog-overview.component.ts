import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Blog, BlogCollapseType } from './blog';

@Component({
	selector: 'blog-overview',
	templateUrl: 'app/blog/blog-overview.template.html'
})
export class BlogOverviewComponent implements OnInit {
	
	constructor(private route: ActivatedRoute) {
	}
	
	ngOnInit() {
		this.blogs = [
			new Blog("First Entry"),
			new Blog("Second")
		]
		
		var search = ""
		if(this.route.snapshot.params.search)
			search = this.route.snapshot.params.id
		
		// TODO: filter
		this.filter(search);
	}
	
	ngOnDestroy() {
		
	}
	
	blogs: Array<Blog>;	
	filteredBlogs: Array<Blog>;
	
	public filter(by: string) {
		this.filteredBlogs = this.blogs.filter(b => b.title.startsWith(by))
	}
}


