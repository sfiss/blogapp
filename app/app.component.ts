import { Component } from '@angular/core';
import {NGB_DIRECTIVES, NGB_PRECOMPILE, NGB_COLLAPSE_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

export class NavItem {
	public name: string;
	
	constructor(name: string) {
        this.name = name;
    }
}

export class NavController {
	public collapsed: boolean;
	public items: Array<NavItem>;
}

const ITEMS: Array<NavItem> = [
				new NavItem("Blog"),
				new NavItem("About")
			]

@Component({
	selector: 'blog-app',
	precompile: [ NGB_PRECOMPILE ],
	directives: [ NGB_DIRECTIVES, NGB_COLLAPSE_DIRECTIVES ],
	styleUrls: ['app/app.styles.css'],
	templateUrl: 'app/app.template.html'
})
export class AppComponent { 
	public title: string = 'My Blog';
	
	navController: NavController = {
		collapsed: true,
		items: ITEMS
	}
}


