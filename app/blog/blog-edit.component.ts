import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { Blog, BlogCollapseType } from './blog';
import { BlogService } from './blog.service';

@Component({
	selector: 'blog-edit',
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: ['app/blog/blog-detail.styles.css', 'app/blog/blog-edit.styles.css'],
	templateUrl: 'app/blog/blog-edit.template.html'
})
export class BlogEditComponent implements OnInit, OnDestroy {
	
	subBlogs: any;
	
	constructor(private route: ActivatedRoute, private service: BlogService) {}
	
	ngOnInit() {
		if(this.route.snapshot.params['title']) {
			let title = this.route.snapshot.params['title'];
			this.subBlogs = this.service.getBlog(title).subscribe(
				blog => this.blog = blog,
				error => 0
			);
		} else {
			this.blog = new Blog("Title");
		}		
	}
	
	ngOnDestroy() {		
		if(this.subBlogs !== undefined)
			this.subBlogs.unsubscribe();
	}
	
	blog: Blog;
}


