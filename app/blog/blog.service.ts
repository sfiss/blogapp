import { Injectable } from '@angular/core';

import { Blog, BlogCollapseType } from './blog';

@Injectable()
export class BlogService {
	getBlogs(): Array<Blog> {
		return [ new Blog("Number 1"), new Blog("Number 2")];
	}
	
	getBlog(title: string): Blog {
		return undefined;
	}
	
	saveBlog(blog: Blog): boolean {
		return false;
	}
	
	deleteBlog(blog: Blog): boolean {
		return false;
	}
}


