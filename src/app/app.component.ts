import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  public str: string = "Hello Child one";
  public Message: string = ""; 
  public stringForChild : string = 'Hello from Parent component';

  @Input() public messageFromChild : string = '';

  public routerList = [
    { path : '/first', name: 'Go to First'},
    { path : '/second', name: 'Go to Second'},
    { path : '/technology', name: 'Go to List of Technologies'},
    { path : '/books', name: 'Go to List of Books'}
  ]

}
