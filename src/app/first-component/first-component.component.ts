import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  public flag : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    return this.flag ? 'purple' : 'orange';
  }

}
