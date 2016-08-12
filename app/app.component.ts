import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES  } from '@angular/router';
import { FORM_DIRECTIVES  } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { REACTIVE_FORM_DIRECTIVES, NgModel, FORM_PROVIDERS } from '@angular/forms';

import { NavItem, NavComponent } from './nav/nav.component';
import { BlogOverviewComponent } from './blog/blog-overview.component';

import { BlogService } from './blog/blog.service';

import 'rxjs/Rx';

@Component({
	selector: 'blog-app',
	directives: [
		ROUTER_DIRECTIVES,	
		FORM_DIRECTIVES,
		REACTIVE_FORM_DIRECTIVES,
		NgModel,
		NavComponent 
	],
	providers: [ 
		HTTP_PROVIDERS,
		FORM_PROVIDERS,
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


