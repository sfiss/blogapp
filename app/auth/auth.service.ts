import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
	private token: string;

	constructor(private http: Http) {
		this.token = localStorage.getItem('auth_token');
	}

	login(email, password) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post(
			'/auth/login', 
			JSON.stringify({ email, password }), 
			{ headers }
		)
		.map(res => res.json())
		.map(res => {
			if (res.success) {
				let token = res.auth_token;
				localStorage.setItem('auth_token', token);
				this.token = token;
			}
			return res.success;
		});
	}
  
	logout() {
		return this.http.get(
			'/auth/logout', {
			headers: new Headers({
				'x-security-token': this.token
			})
		})
		.map(res => {
			this.token = undefined;
			localStorage.removeItem('token');
		});
	}

	isLoggedIn(): boolean {
		return !!localStorage.getItem('token');
	}
}