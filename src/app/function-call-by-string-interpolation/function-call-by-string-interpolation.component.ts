import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-call-by-string-interpolation',
  templateUrl: './function-call-by-string-interpolation.component.html',
  styleUrls: ['./function-call-by-string-interpolation.component.css']
})
export class FunctionCallByStringInterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getString() {
    return 'Marvellous Infosystem';
  }

}
