import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog, BlogText, BlogCode, BlogImage } from './blog';
import { BlogService } from './blog.service';

@Component({
	selector: 'blog-edit',
	styleUrls: ['app/blog/blog-detail.styles.css', 'app/blog/blog-edit.styles.css'],
	templateUrl: 'app/blog/blog-edit.template.html'
})
export class BlogEditComponent implements OnInit, OnDestroy {
	
	private subBlogs: any; 
	private subSave: any;
	
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
		if(this.subSave !== undefined)
			this.subSave.unsubscribe();
	}
	
	public blog: Blog;
	
	public saving: boolean = false; 
	
	public save() {
		console.log('Save');
		this.saving = true;
		this.blog.editDate = new Date();
		
		this.subSave = this.service.saveBlog(this.blog).subscribe(
			result => {
				this.saving = false;
				
				if(result) {
					let search = this.blog.title;
					this.router.navigate(['/blog', search]);
				} else {
					alert('Save failed, maybe title already exists.');
				}
			},
			error => console.log('Error')
		);
	}
	
	public addText(index: number) {
		let blogPart = new BlogText();
		
		this.blog.content.splice(index+1, 0, blogPart);
	}
}


