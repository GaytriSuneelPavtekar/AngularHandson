import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-service-demo2',
  templateUrl: './service-demo2.component.html'
})
export class ServiceDemo2Component implements OnInit {
  public no1 : number = 7;
  constructor(private _numberServiceObj : NumberService) { }

  ngOnInit(): void {
  }

  checkPrime() {
    return this._numberServiceObj.checkPrime(this.no1);
  }

}
