import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: string): string {
    const transformValue = value.toUpperCase();
    return transformValue;
  }

}
