import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NGB_DIRECTIVES, NGB_PRECOMPILE, NGB_COLLAPSE_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

import { Blog, BlogCollapseType } from './blog';

@Component({
	selector: 'blog-detail',
	precompile: [ NGB_PRECOMPILE ],
	directives: [ ROUTER_DIRECTIVES, NGB_DIRECTIVES, NGB_COLLAPSE_DIRECTIVES ],
	styleUrls: ['app/blog/blog-detail.styles.css', 'app/blog/blog-edit.styles.css'],
	templateUrl: 'app/blog/blog-detail.template.html'
})
export class BlogDetailComponent {
	@Input()
	blog: Blog;
	
	edit() {
		
	}
}


