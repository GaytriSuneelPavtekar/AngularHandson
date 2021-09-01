import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticServiceService {

  constructor() { }

  addition(no1: number, no2: number) {
    return no1 + no2;
  }

  subtraction(no1: number, no2: number) {
    return no1 - no2;
  }
}
