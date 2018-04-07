import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'upperCase'
})

export class UpperCasePipe implements PipeTransform {
  transform(name: string): string {
    if(!name) return name;
    return name.toUpperCase();
  }
}
