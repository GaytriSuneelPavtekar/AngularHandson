import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() public parentData : string = "";
@Output() public childEvent = new EventEmitter();
public fun(){
  this.childEvent.emit("hello from child");
  console.log('Clicked');
}
  constructor() { }

  ngOnInit(): void {
  }

}
