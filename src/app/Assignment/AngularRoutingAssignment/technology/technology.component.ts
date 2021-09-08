import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  template: `<ul *ngFor='let technology of technologyList'>
              <li>{{technology}}</li>
            </ul>`,
  styles: [
  ]
})
export class TechnologyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public technologyList = ['Angular', 'Node JS', 'Android', 'Big data', 'Artificial Intelligence'];

}
