import { Component, Input } from '@angular/core';

import { Blog, BlogCollapseType } from './blog';

@Component({
	selector: 'blog-detail',
	templateUrl: 'app/blog/blog-detail.template.html'
})
export class BlogDetailComponent {
	@Input()
	blog: Blog;
}


