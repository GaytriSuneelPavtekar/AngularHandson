import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalid',
  template: `
    <p>
      Sorry.. Wrong Choice!!
    </p>
  `,
  styles: [
  ]
})
export class InvalidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
