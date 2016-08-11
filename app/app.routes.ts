import { Routes, RouterModule } from '@angular/router';

import { BlogOverviewComponent } from './blog/blog-overview.component';
import { BlogEditComponent } from './blog/blog-edit.component';

const routes: Routes = [
	{ path: 'about', component: BlogOverviewComponent}, // name: 'about'
	{ path: 'edit', component: BlogEditComponent},
	{ path: 'edit/:title', component: BlogEditComponent},
	{ path: 'login', component: BlogOverviewComponent}, // name: 'login'
	{ path: 'blog', component: BlogOverviewComponent}, // name: 'blog'
	{ path: 'blog/:search', component: BlogOverviewComponent}, // name: 'blog-search'
	{ path: '', redirectTo: '/blog', pathMatch: 'full'} // name: 'home'
];

export const ROUTING = RouterModule.forRoot(routes);