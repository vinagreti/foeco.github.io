export class Question {
	title: string;
	text: string;
	date: string;

	constructor(obj: any = {}){
		this.title = obj.title ? obj.title : null;
		this.text = obj.text ? obj.text : null;
		this.date = obj.date ? obj.date : null;
	}
}