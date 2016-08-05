import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { APP_ROUTES_PROVIDER } from './app.routes'
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

bootstrap(AppComponent, [
	AuthService,
	AuthGuard,
	APP_ROUTES_PROVIDER
]);