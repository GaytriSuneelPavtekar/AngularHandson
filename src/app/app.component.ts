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
}
