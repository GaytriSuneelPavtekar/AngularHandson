import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-service-demo3',
  templateUrl: './service-demo3.component.html'
})
export class ServiceDemo3Component implements OnInit {
  public str : string = 'GaYtRi';
  constructor(private _stringServiceObj : StringService) { }

  ngOnInit(): void {
  }

  countCapital() {
    return this._stringServiceObj.countCapital(this.str);
  }

}
