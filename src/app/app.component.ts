import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Message: string = ""; 
  title = 'Test';
  public str: string = "Hello Child one";
  public stringForChild : string = 'Hello from Parent component';
}
