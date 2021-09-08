import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  template: `<ul *ngFor='let book of bookList'>
              <li>{{book}}</li>
            </ul>`,
  styles: [
  ]
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public bookList = ['BookOne', 'BookTwo', 'BookThree', 'BookFour'];

}
