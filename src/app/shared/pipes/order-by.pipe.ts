import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  transform(value :any, field: string, desc: boolean = false) : any[] {
    if(field){
      return value.sort((a, b) => {
        let av = a[field].toString();
        let bv = b[field].toString();
        if(desc){
          return bv.localeCompare(av);
        } else {
          return av.localeCompare(bv);
        }
      });
    } else {
      return value;
    }
  }
}
