import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavComponent } from './nav/nav.component';
import { BlogOverviewComponent } from './blog/blog-overview.component';
import { BlogEditComponent } from './blog/blog-edit.component';

import { ROUTING } from './app.routes';

@NgModule({
	imports: [
		BrowserModule,
		ROUTING
	],
	declarations: [
		AppComponent,
		NavComponent,
		BlogOverviewComponent,
		BlogEditComponent
	],
	providers: [],
	bootstrap: [ 
		AppComponent
	]
})
export class AppModule { }