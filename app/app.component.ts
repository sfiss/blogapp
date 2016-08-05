import { Component } from '@angular/core';
import {NGB_DIRECTIVES, NGB_PRECOMPILE} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'blog-app',
	precompile: [ NGB_PRECOMPILE ],
	directives: [ NGB_DIRECTIVES ],
	styleUrls: ['app/app.styles.css'],
	templateUrl: 'app/app.template.html'
})
export class AppComponent { }
