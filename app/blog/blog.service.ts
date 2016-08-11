import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Blog } from './blog';

@Injectable()
export class BlogService {
	
	constructor (private http: Http) {
		console.log('Recreated BlogService');
	}
	
	private mockblogs: Array<Blog> = [ new Blog("Number 1"), new Blog("Number 2")];
	
	public getBlogs(): Observable<Array<Blog>> {
		// TODO: server call
		return Observable.of(this.mockblogs);
	}
	
	public getBlog(title: string): Observable<Blog> {
		// TODO: server call
		return this.getBlogs()
			.map(barr => barr.filter(b => b.title == title))
			.map(barr => barr[0]);
	}
	
	public saveBlog(blog: Blog): Observable<boolean> {
		// TODO: check if blog does not exist done in server!
		if(this.mockblogs.filter(b => b.title == blog.title).length == 0)
			this.mockblogs.push(blog);
		return Observable.of(true);
	}
	
	public deleteBlog(blog: Blog): Observable<boolean> {
		this.mockblogs = this.mockblogs.filter(b => b.title != blog.title);
		return Observable.of(true);
	}
}


