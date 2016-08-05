import { Component, OnInit, OnDestroy } from '@angular/core';

import { Blog, BlogCollapseType } from './blog';

@Component({
	selector: 'blog-overview',
	templateUrl: 'app/blog/blog-overview.template.html'
})
export class BlogOverviewComponent implements OnInit {
	
	ngOnInit() {
		this.blogs = [
			new Blog("First Entry"),
			new Blog("Second")
		]
		
		// TODO: filter
		this.filter("");
	}
	
	ngOnDestroy() {
		
	}
	
	blogs: Array<Blog>;	
	filteredBlogs: Array<Blog>;
	
	public filter(by: string) {
		this.filteredBlogs = this.blogs.filter(b => b.title.startsWith(by))
	}
}


