import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';

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
	
	constructor(private router: Router, private route: ActivatedRoute, private service: BlogService) {}
	
	ngOnInit() {
		if(this.route.snapshot.params['title']) {
			let title = this.route.snapshot.params['title'];
			console.log(" " + title);
			this.subBlogs = this.service.getBlog(title).subscribe(
				blog => this.blog = blog,
				error => console.log('Error')
			);
		} else {
			this.blog = new Blog("");
		}		
	}
	
	ngOnDestroy() {
		if(this.subBlogs !== undefined)
			this.subBlogs.unsubscribe();
	}
	
	blog: Blog;
	
	save() {
		console.log('Save')
		// TODO: delay with progressbar, subscribe and navigate on result
		this.service.saveBlog(this.blog);
		let search = this.blog.title;
		this.router.navigate(['/blog', search]);
	}
}


