export const enum BlogCollapseType {
	TITLE, ABSTRACT, ALL
}

export class Blog {
	title: string;
	createDate: Date = new Date();
	editDate: Date = new Date();
	content: Array<BlogPart> = [];
	keywords: Array<string> = [];
	collapsed: BlogCollapseType = BlogCollapseType.ALL;
	
	constructor(title: string) {
		this.title = title;
		
		let content1 = new BlogText();
		content1.heading = "C1";
		content1.text = "Lalalalalla";
		
		let content2 = new BlogCode();
		content2.code = "Lalalalalla";
		
		this.content = [
			content1, content2
		];
		
		this.keywords = [
			'java', 'scala'
		];
		
		if(title.startsWith("First")){
			this.content = [
				content1
			];
		}
	}
	
	public toggleContent() {
		switch(this.collapsed) {
			case BlogCollapseType.TITLE:
				if(this.content.length == 1)
					this.collapsed = BlogCollapseType.ALL;
				else
					this.collapsed = BlogCollapseType.ABSTRACT;
				break;
			case BlogCollapseType.ABSTRACT:
				if(this.content.length == 1)
					this.collapsed = BlogCollapseType.TITLE;
				else
					this.collapsed = BlogCollapseType.ALL;	
				break;
			case BlogCollapseType.ALL:
				this.collapsed = BlogCollapseType.TITLE;
				break;
		}
	} 
	
	public showContent(): number {
		switch(this.collapsed) {
			case BlogCollapseType.TITLE:
				return 0;
			case BlogCollapseType.ABSTRACT:
				return 1;
			case BlogCollapseType.ALL:
				return this.content.length;
		}
	}
}

export interface BlogPart {
	type(): string;
}

export class BlogText implements BlogPart {
	heading: string;
	text: string;
	
	public type(): string {
		return "text";
	}
}

export class BlogCode implements BlogPart {
	code: string;
	
	public type(): string {
		return "code";
	}
}

export class BlogImage implements BlogPart {
	// TODO
	public type(): string {
		return "image";
	}
}