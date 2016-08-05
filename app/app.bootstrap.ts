import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes'

bootstrap(AppComponent, [
	APP_ROUTES_PROVIDER
]);