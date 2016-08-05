import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
	selector: 'login',
	template: 'LOGIN'
})
export class LoginComponent {
	constructor(private authService: AuthService, private router: Router) {}

	onSubmit(email:string, password:string) {
		this.authService.login(email, password).subscribe(result => {
			if (result) {
				//TODO: implement behavior
				this.router.navigate(['']);
			}
		});
	}
}