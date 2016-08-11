import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

export class NavItem {
	public name: string;
	
	public target: string;
	
	constructor(name: string, target: string) {
        this.name = name;
		this.target = target;
    }
}

@Component({
	selector: 'blog-nav',
	directives: [ ROUTER_DIRECTIVES ],
	styleUrls: ['app/nav/nav.styles.css'],
	templateUrl: 'app/nav/nav.template.html'
})
export class NavComponent {
	collapsed: boolean = true;
	
	constructor(private router: Router, private route: ActivatedRoute) { }
	
	@Input()
	title: string;
	
	@Input()
	public items: Array<NavItem>;
	
	public searchBy: string;
	
	public search() {
		this.router.navigate(['/blog', this.searchBy]);
	}
}


