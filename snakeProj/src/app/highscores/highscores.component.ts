import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HighScoresService, scores } from '../high-scores.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss']
})
export class HighscoresComponent  {
  columns = ["Name", "Score"];
  indexs = ["name", "score"];
  public filter: string = "";
  public data: Array<scores> = [];
  constructor(
    private _highScores: HighScoresService,
    private _router: Router) { 
    this.loadScores();
  }

  loadScores() {
    this._highScores.readHighScores().subscribe(result => {
      this.data = (result);
    });
  }

  

}
