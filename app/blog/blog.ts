export const enum BlogCollapseType {
	TITLE, ABSTRACT, ALL
}

export class Blog {
	title: string;
	createDate: Date = new Date();
	editDate: Date = new Date();
	content: Array<BlogPart> = [];
	collapsed: BlogCollapseType = BlogCollapseType.ABSTRACT;
	
	constructor(title: string) {
		this.title = title;
	}
}

export interface BlogPart {
	
}

export class BlogText implements BlogPart {
	heading: string;
	text: string;
}

export class BlogCode implements BlogPart {
	text: string;
}

export class BlogImage implements BlogPart {
	// TODO
}