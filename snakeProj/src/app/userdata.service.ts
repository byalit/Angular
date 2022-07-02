import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
 private _customerName!: string;

  public get playerName2() { return this._customerName}

  constructor( private _http:  HttpClient  ) { }


  public setName(name: string): void {
   this._customerName = name;
  }
}
