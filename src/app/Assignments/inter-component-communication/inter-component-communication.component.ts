import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inter-component-communication',
  templateUrl: './inter-component-communication.component.html'
})
export class InterComponentCommunicationComponent implements OnInit {
  @Input() public name : string = '';
  @Output() public childToParentEvent = new EventEmitter();
  public messageToParent : string = '';
  @Output() public messageToParent2 : string = 'Message 2 from child';
  constructor() { }

  ngOnInit(): void {
  }

  submitToParent(name: string){
    this.messageToParent = name;
    return this.childToParentEvent.emit(this.messageToParent);
  }

}
