import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-without-ng-model',
  templateUrl: './two-way-binding-without-ng-model.component.html',
  styleUrls: ['./two-way-binding-without-ng-model.component.css']
})
export class TwoWayBindingWithoutNgModelComponent implements OnInit {
  public firstName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitName(name: string) {
    return this.firstName = name;
  }

}
