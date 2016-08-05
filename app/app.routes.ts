import { provideRouter, RouterConfig }  from '@angular/router';
import { BlogOverviewComponent } from './blog/blog-overview.component';

const routes: RouterConfig = [
	{ path: 'about', component: BlogOverviewComponent, name: 'about'},
	{ path: 'login', component: BlogOverviewComponent, name: 'login'},
	{ path: 'blog', component: BlogOverviewComponent, name: 'blog'},
	{ path: 'blog/:search', component: BlogOverviewComponent, name: 'blog-search'}
	{ path: '', component: BlogOverviewComponent, name: 'home'}
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(routes)
];