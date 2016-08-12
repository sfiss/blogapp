export const enum BlogCollapseType {
	TITLE, ABSTRACT, ALL
}

export class Blog {
	title: string;
	createDate: Date = new Date();
	editDate: Date = new Date();
	content: Array<BlogPart> = [];
	collapsed: BlogCollapseType = BlogCollapseType.ALL;
	
	constructor(title: string) {
		this.title = title;
		
		this.content = [
			new BlogText()
		];
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
	
	public toString = () : string => {
        return `Blog: ${this.title} [` + this.content.map(p => p.toString()).join(', ') + `]`;
    }
}

export interface BlogPart {
	type(): string;
}

export class BlogText implements BlogPart {
	public heading: string = "";
	public text: string = "";
	
	public type(): string {
		return "text";
	}
	
	public toString = () : string => {
        return `Text (${this.heading}, ${this.text})`;
    }
}

export class BlogCode implements BlogPart {
	public code: string = "";
	
	public type(): string {
		return "code";
	}
	
	public toString = () : string => {
        return `Code (${this.code})`;
    }
}

export class BlogImage implements BlogPart {
	public imageURL: Uint8Array;
	
	public type(): string {
		return "image";
	}
	
	public toString = () : string => {
        return `Image`;
    }
}