export class Product {
	title: string;
	text: string;
	date: string;
	likes: number;

	constructor(obj: any = {}){
		this.title = obj.title ? obj.title : null;
		this.text = obj.text ? obj.text : null;
		this.date = obj.date ? obj.date : null;
		this.likes = obj.likes ? obj.likes : [];
	}
}