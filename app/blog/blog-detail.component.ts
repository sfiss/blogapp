import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Blog, BlogCollapseType } from './blog';

@Component({
	selector: 'blog-detail',
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: ['app/blog/blog-detail.styles.css'],
	templateUrl: 'app/blog/blog-detail.template.html'
})
export class BlogDetailComponent {
	@Input()
	blog: Blog;
}


