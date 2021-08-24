import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-waybinding',
  templateUrl: './two-waybinding.component.html',
  styleUrls: ['./two-waybinding.component.css']
})
export class TwoWaybindingComponent implements OnInit {
public name : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
