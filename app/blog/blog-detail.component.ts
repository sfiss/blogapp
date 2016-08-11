import { Component, Input, OnInit, OnDestroy  } from '@angular/core';

import { Blog } from './blog';

@Component({
	selector: 'blog-detail',
	directives: [],
	styleUrls: ['app/blog/blog-detail.styles.css', 'app/blog/blog-edit.styles.css'],
	templateUrl: 'app/blog/blog-detail.template.html'
})
export class BlogDetailComponent {
	@Input()
	public blog: Blog;
}


