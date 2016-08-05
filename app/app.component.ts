import { Component } from '@angular/core';
import {NGB_DIRECTIVES, NGB_PRECOMPILE, NGB_COLLAPSE_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';
import { NavItem, NavComponent } from './nav/nav.component';

@Component({
	selector: 'blog-app',
	precompile: [ NGB_PRECOMPILE ],
	directives: [ NGB_DIRECTIVES, NGB_COLLAPSE_DIRECTIVES, NavComponent ],
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


