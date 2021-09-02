import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html'
})
export class ClassListComponent implements OnInit {
  public classes: any = [];
  constructor(private _classServiceObj : ClassService) { }

  ngOnInit(): void {
    this._classServiceObj.getClassDetails().subscribe(data=>this.classes=data);
  }

}
