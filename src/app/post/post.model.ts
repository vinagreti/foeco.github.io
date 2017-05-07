import { Media } from './../upload/media.model';

export class Post {
	title: string;
	text: string;
	date: string;
	media: Array<Media>;

	constructor(obj: any = {}){
		this.title = obj.title ? obj.title : null;
		this.text = obj.text ? obj.text : null;
		this.date = obj.date ? obj.date : null;
		this.media = obj.media ? obj.media : [];
	}
}