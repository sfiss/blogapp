import { provideRouter, RouterConfig }  from '@angular/router';
import { BlogOverviewComponent } from './blog/blog-overview.component';

const routes: RouterConfig = [
  {
    path: '',
    component: BlogOverviewComponent
  }
];

export const APP_ROUTES_PROVIDER = [
	provideRouter(routes)
];