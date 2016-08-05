import { Component } from '@angular/core';
import { NGB_DIRECTIVES, NGB_PRECOMPILE } from '@ng-bootstrap/ng-bootstrap';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavItem, NavComponent } from './nav/nav.component';

@Component({
	selector: 'blog-app',
	precompile: [ NGB_PRECOMPILE ],
	directives: [ 
		NGB_DIRECTIVES,
		ROUTER_DIRECTIVES,		
		NavComponent ],
	styleUrls: ['app/app.styles.css'],
	templateUrl: 'app/app.template.html'
})
export class AppComponent { 
	public title: string = 'My Blog';
	public navItems = NAVITEMS;
}

const NAVITEMS: Array<NavItem> = [
				new NavItem("Blog"),
				new NavItem("About")
			]


