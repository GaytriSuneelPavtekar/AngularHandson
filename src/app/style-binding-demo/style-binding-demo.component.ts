import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding-demo',
  templateUrl: './style-binding-demo.component.html',
  styleUrls: ['./style-binding-demo.component.css']
})
export class StyleBindingDemoComponent implements OnInit {
  public flag :boolean = true;
  public orange:string = 'Orange';

  constructor() { }

  ngOnInit(): void {
  }

  getColor(): string {
    return this.flag === true ? 'red' : 'purple';
  }

}
