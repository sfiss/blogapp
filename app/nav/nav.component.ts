import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
	directives: [],
	styleUrls: ['app/nav/nav.styles.css'],
	templateUrl: 'app/nav/nav.template.html'
})
export class NavComponent {
	private collapsed: boolean = true;
	
	constructor(private router: Router, private route: ActivatedRoute) { }
	
	@Input()
	public title: string;
	
	@Input()
	public items: Array<NavItem>;
	
	public searchBy: string;
	
	public search() {
		this.router.navigate(['/blog', this.searchBy]);
	}
}


