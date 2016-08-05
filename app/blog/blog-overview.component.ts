import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Blog, BlogCollapseType } from './blog';

@Component({
	selector: 'blog-overview',
	templateUrl: 'app/blog/blog-overview.template.html'
})
export class BlogOverviewComponent implements OnInit, OnDestroy, DoCheck {
	
	search: string
	
	constructor(private route: ActivatedRoute) {
	}
	
	ngOnInit() {
		console.log('INIT')
		this.blogs = [
			new Blog("First Entry"),
			new Blog("Second")
		]
	}
	
	ngDoCheck() {
		// Component not recreated if already present, therefore need to check here
		var search = ""
		if(this.route.snapshot.params.search)
			search = this.route.snapshot.params.search
		
		// Performance: Only update if changed
		if(search !== this.search) {
			this.search = search;
			this.filter(search);
		}
	}
	
	ngOnDestroy() {
		
	}
	
	blogs: Array<Blog>;	
	filteredBlogs: Array<Blog>;
	
	public filter(by: string) {
		console.log("Filter with " + by);
		let f = (whole, part) => whole.startsWith(part);
		this.filteredBlogs = this.blogs.filter(b => f(b.title, by))
	}
}


