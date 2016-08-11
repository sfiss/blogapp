import { Component, Input } from '@angular/core';

import { Blog, BlogCollapseType } from './blog';

@Component({
	selector: 'blog-detail',
	directives: [],
	styleUrls: ['app/blog/blog-detail.styles.css', 'app/blog/blog-edit.styles.css'],
	templateUrl: 'app/blog/blog-detail.template.html'
})
export class BlogDetailComponent {
	@Input()
	blog: Blog;
	
	edit() {
		
	}
}


