import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
	constructor(
		private sanit: DomSanitizer
	) {}
  	transform(value) : any {
  		let safeHtml: any = JSON.stringify(value).replace(/\\n/g, "<br>");
  		console.log(safeHtml[0]);
  		if(safeHtml[0] == '\"') safeHtml = safeHtml.substr(1);
  		if(safeHtml[(safeHtml.length - 1)] == '\"') safeHtml = safeHtml.substr(0, (safeHtml.length - 1));
      safeHtml = this.sanit.bypassSecurityTrustHtml(safeHtml);
    	return safeHtml;
  	}
}