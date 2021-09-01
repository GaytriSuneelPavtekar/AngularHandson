import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  public i :  number = 0;
  public result :string = '';
  constructor() { }

  checkPrime(num: number): string {
    for(this.i==2; this.i<num ; this.i++){
      if(num%2==0)  this.result = 'It is not a prime number';
      else this.result = 'It is a prime number';
    }
    return this.result;
  }
}
