import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

export class Item {
	name: string;
}

export class Cont {
	list: Array<Item> = [ new Item() ]
}

@Component({
	selector: 'test',
	directives: [ FORM_DIRECTIVES ],
	templateUrl: 'app/test.template.html'
})
export class TestComponent { 
	public cont: Cont = new Cont();
	
	add() {
		let item = new Item()
		this.cont.list.push(item);
	}
}


