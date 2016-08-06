import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Blog, BlogCollapseType } from './blog';

@Component({
	selector: 'blog-edit',
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: ['app/blog/blog-detail.styles.css', 'app/blog/blog-edit.styles.css'],
	templateUrl: 'app/blog/blog-edit.template.html'
})
export class BlogEditComponent {
	blog: Blog;
}


