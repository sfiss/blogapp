import { Component } from '@angular/core';
// import { NGB_DIRECTIVES, NGB_PRECOMPILE, NGB_COLLAPSE_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';
import { ROUTER_DIRECTIVES  } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { NavItem, NavComponent } from './nav/nav.component';
import { BlogOverviewComponent } from './blog/blog-overview.component';

import { BlogService } from './blog/blog.service';

import 'rxjs/Rx';

@Component({
	selector: 'blog-app',
	directives: [
		ROUTER_DIRECTIVES,		
		NavComponent 
	],
	providers: [ 
		HTTP_PROVIDERS,
		BlogService
	],
	styleUrls: ['app/app.styles.css'],
	templateUrl: 'app/app.template.html'
})
export class AppComponent { 
	public title: string = 'Sebastian\'s Blog';
	public navItems = NAVITEMS;
}

const NAVITEMS: Array<NavItem> = [
				new NavItem("Blog", "/blog"),
				new NavItem("About", "/about")
			]


