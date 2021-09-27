import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addition'
})
export class AdditionPipe implements PipeTransform {

  transform(value: number, param: number): unknown {
    return value + param;
  }

}
