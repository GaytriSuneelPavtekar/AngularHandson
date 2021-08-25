import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding-demo',
  templateUrl: './class-binding-demo.component.html',
  styleUrls: ['./class-binding-demo.component.css'],
})
export class ClassBindingDemoComponent implements OnInit {
  public flag: boolean = true;
  public stringFlag: string = 'success';
  constructor() {}

  ngOnInit(): void {}
}
