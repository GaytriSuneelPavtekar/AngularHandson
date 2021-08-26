import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-case-conversion',
  templateUrl: './string-case-conversion.component.html'
})
export class StringCaseConversionComponent implements OnInit {
  public name : string = 'Marvellous Infosystem';
  constructor() { }

  ngOnInit(): void {
  }

  toUpperCaseOne() {
    this.name = this.name.toUpperCase();
  }

  toLowerCase() {
    this.name = this.name.toLowerCase();
  }

}
