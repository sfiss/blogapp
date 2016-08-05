import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NGB_DIRECTIVES, NGB_PRECOMPILE, NGB_COLLAPSE_DIRECTIVES } from '@ng-bootstrap/ng-bootstrap';

export class NavItem {
	public name: string;
	
	constructor(name: string) {
        this.name = name;
    }
}

@Component({
	selector: 'blog-nav',
	precompile: [ NGB_PRECOMPILE ],
	directives: [ NGB_DIRECTIVES, NGB_COLLAPSE_DIRECTIVES ],
	styleUrls: ['app/nav/nav.styles.css'],
	templateUrl: 'app/nav/nav.template.html'
})
export class NavComponent {
	collapsed: boolean = true;
	
	constructor(private router: Router) { }
	
	@Input()
	title: string;
	
	@Input()
	public items: Array<NavItem>;
	
	public searchBy: string;
	
	public search() {
		this.router.navigate(['/', this.searchBy]);
	}
}


