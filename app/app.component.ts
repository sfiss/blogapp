import { Component } from '@angular/core';
import {NGB_DIRECTIVES, NGB_PRECOMPILE, NGB_COLLAPSE_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

export class NavController {
	collapsed: boolean;
}

@Component({
	selector: 'blog-app',
	precompile: [ NGB_PRECOMPILE ],
	directives: [ NGB_DIRECTIVES, NGB_COLLAPSE_DIRECTIVES ],
	styleUrls: ['app/app.styles.css'],
	templateUrl: 'app/app.template.html'
})
export class AppComponent { 
	title: string = 'My Blog';
	
	navController: NavController = {
		collapsed: false
	}
}
