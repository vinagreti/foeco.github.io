import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  //transform(value :Object[]|string[], args :string|string[]) : any[] {
  transform(value :any, args :any) : any[] {
    let filteredData = value;
    if(hasValueAndArgs(value, args)){
      if(isNumberOrString(args)){
        args = getLowerCaseFromNumberOrString(args);
        if(isNumberOrString(value[0])){
          filteredData = value.filter(object => object.toLowerCase().indexOf(args) >= 0);
        } else {
          let keys = getObjectKeys(value[0]);
          filteredData = value.filter(object => filterObjectWitString(object, keys, args));
        }
      } else {
        filteredData = value.filter(object => filterObjectWithObject(object, args));
      }
    }
    return filteredData;
  }
}

function getLowerCaseFromNumberOrString(obj){
  if(typeof obj === 'string'){
    return obj.toLowerCase();
  } else if(!isNaN(obj)){
    return obj.toString();
  } else {
    return JSON.stringify(obj).toLowerCase();
  }
}

function isNumberOrString(obj){
  return typeof obj === 'string' || !isNaN(obj);
}

function hasValueAndArgs(value, args){
  return value.length > 0 && isNotEmpty(args);
}

function getObjectKeys(obj){
  let k = [];
  for (let key in obj) {
    k.push(key);
  }
  return k;
}

function isNotEmpty(obj) {
   for(var key in obj) {
      if (obj[key].length > 0) {
         return true;
      }
   }
   return false;
}

function filterObjectWitString(obj :Object, keys :string[], term :string){
  for (let key in keys) {
    let v = obj[keys[key]];
    if(v){
      v = getLowerCaseFromNumberOrString(v);
      if(typeof v == 'string' && v.indexOf(term) >= 0){
        return true;
      }
    }
  }
  return false;
}

function filterObjectWithObject(obj :Object, filter :Object){
  for (let filterKey in filter) {
    let filterValue = filter[filterKey];
    if(filterValue){
      let value = obj[filterKey];
      if(value){
        filterValue = getLowerCaseFromNumberOrString(filterValue);
        value = getLowerCaseFromNumberOrString(value);
        if(typeof value == 'string' && typeof filterValue == 'string' && value.indexOf(filterValue) >= 0){
          return true;
        }
      }
    }
  }
  return false;
}
