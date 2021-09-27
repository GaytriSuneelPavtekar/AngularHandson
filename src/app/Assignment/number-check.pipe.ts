import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberCheck'
})
export class NumberCheckPipe implements PipeTransform {

  public result: string = '';
  public sum: number = 0;
  transform(value: number, param: string): string {
    if (param === 'Even') {
      if (value % 2 !== 0) this.result = 'It is not an even number';
      else this.result = 'It is an even number';
    }
    else if (param === 'Odd') {
      if (value % 2 === 0) this.result = 'It is not an odd number';
      else this.result = 'It is an odd number';
    }
    else if (param === 'Prime') {
      for (let i = 2; i < value; i++) {
        if (value % i == 0) {
          this.result = 'It is not a prime number';
          break;
        }
      }
    }
    else if (param === 'Perfect') {
      for (let i = 1; i <= value / 2; i++) {
        if (value % i === 0) this.sum = i + this.sum;
      }
      if (this.sum == value) this.result = 'It is a perfect number';
      else this.result = 'It is not a perfect number';
    }
    return this.result;
  }

}
