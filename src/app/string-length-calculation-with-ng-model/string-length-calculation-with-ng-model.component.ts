import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-string-length-calculation-with-ng-model',
  templateUrl: './string-length-calculation-with-ng-model.component.html'
})
export class StringLengthCalculationWithNgModelComponent implements OnInit {
  public name : string = '';
  public count : number = 0;
  constructor(public el : ElementRef) { }

  @HostListener ('onkeydown') onkeydown(){
    this.count = this.count + 1;
  }
  ngOnInit(): void {
  }

}
