import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Blog, BlogText, BlogCode, BlogImage } from './blog';
import { BlogDetailComponent } from './blog-detail.component';
import { BlogService } from './blog.service';

@Component({
	selector: 'blog-overview',
	directives: [ BlogDetailComponent ],
	templateUrl: 'app/blog/blog-overview.template.html'
})
export class BlogOverviewComponent implements OnInit, OnDestroy {
	
	private subSearch: any;
	private subBlogs: any;
	
	constructor(private router: Router, private route: ActivatedRoute, private service: BlogService) {}
	
	ngOnInit() {
		this.subBlogs = this.service.getBlogs().subscribe(
			blogs => this.blogs = blogs,
			error => 0
		);
		
		this.filteredBlogs = this.blogs;
		
		this.subSearch = this.route.params
			.subscribe((params) => {
				let search = params['search'];
				if(search !== undefined)
					this.filter(search);
		});
	}
	
	ngOnDestroy() {
		if(this.subSearch !== undefined)
			this.subSearch.unsubscribe();
		
		if(this.subBlogs !== undefined)
			this.subBlogs.unsubscribe();
	}
	
	public blogs: Array<Blog>;	
	public filteredBlogs: Array<Blog>;
	
	public filter(by: string) {
		console.log('Filter');
		let search = decodeURIComponent(by);
		let f = (whole, part) => whole.startsWith(part);
		this.filteredBlogs = this.blogs.filter(b => 
			b.title.startsWith(search)
			|| b.content.some(part => {
				if(part.type() == 'text') {
					let text = <BlogText>part;
					return text.text.indexOf(search) != -1 || text.heading.indexOf(search) != -1;
				}
				if(part.type() == 'code')
					return false;
				if(part.type() == 'image')
					return false;
				return false;
			})
		)
	}
}


