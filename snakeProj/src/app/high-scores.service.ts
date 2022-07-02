import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';


export interface scores {
  name: string,
  score: 0
}

@Injectable({
  providedIn: 'root'
})
export class HighScoresService {

  constructor(private _http:  HttpClient) { }

  public readHighScores(): Observable<scores[]> {
    const URL = 'http://scores.chrum.it/scores/snake';
    const headers = new HttpHeaders({
          'Accept': 'application/json',
        });
    const options = { headers }
    return this._http.get<scores[]>(URL, options);
  }

}
