import { Component, OnInit } from '@angular/core';
import { ArithmeticServiceService } from '../arithmetic-service.service';
import { StringService } from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html'
})
export class ServiceDemoComponent implements OnInit {
  public no1 : number = 20;
  public no2 : number = 10;
  public str : string = 'GaUrAv';
  constructor(private _obj: ArithmeticServiceService, private _obj2: StringService, private _obj3: NumberService) { }

  ngOnInit(): void {
  }
  addition(): number {
    return this._obj.addition(this.no1, this.no2);
  }
  subtraction(): number {
    return this._obj.subtraction(this.no1, this.no2);
  }
  checkPrime() {
    return this._obj3.checkPrime(this.no1);
  }
  countCapital() {
    return this._obj2.countCapital(this.str);
  }
}
