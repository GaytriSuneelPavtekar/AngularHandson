import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  public i : number = 0;
  public count : number = 0;
  constructor() { }

  countCapital(str: string){
    for(this.i; this.i<str.length; this.i++){
        if(str[this.i]>='A' && str[this.i]<='Z') this.count = this.count+1;
    }
    return this.count;
  }
}
