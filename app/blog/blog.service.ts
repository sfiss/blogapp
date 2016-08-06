import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Blog, BlogCollapseType } from './blog';

@Injectable()
export class BlogService {
	
	constructor (private http: Http) {}
	
	getBlogs(): Observable<Array<Blog>> {
		return Observable.of([ new Blog("Number 1"), new Blog("Number 2")]);
	}
	
	getBlog(title: string): Observable<Blog> {
		return this.getBlogs()
			.map(barr => barr.filter(b => b.title == title))
			.map(barr => barr[0]);
	}
	
	saveBlog(blog: Blog): boolean {
		return false;
	}
	
	deleteBlog(blog: Blog): boolean {
		return false;
	}
}


