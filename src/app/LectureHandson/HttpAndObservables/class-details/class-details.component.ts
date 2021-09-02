import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html'
})
export class ClassDetailsComponent implements OnInit {
  public classesDetails: any = [] ;
  constructor(private _classServiceObj: ClassService) { }

  ngOnInit(): void {
    this._classServiceObj.getClassDetails().subscribe(data=>this.classesDetails=data);
    console.log('classesDetails', this.classesDetails);
  }

}
