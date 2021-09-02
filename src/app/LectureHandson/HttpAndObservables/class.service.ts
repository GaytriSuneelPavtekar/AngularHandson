import { Injectable } from '@angular/core';
import { IClaases } from './classes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private _url : string = "/assets/data/classes.json";
  constructor(private _http:HttpClient) { }

  getClassDetails():Observable<IClaases[]> {
    return this._http.get<IClaases[]>(this._url);
  }
}
