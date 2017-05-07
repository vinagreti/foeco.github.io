export class Article{
  name: string;
  firstParagraph: string;
  content : string;

  constructor(obj: any = {}){
    this.name =  obj.name ? obj.name : null;
    this.firstParagraph =  obj.firstParagraph ? obj.firstParagraph : null;
    this.content =  obj.content ? obj.content : null;
  }
}