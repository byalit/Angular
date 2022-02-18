import { Component, ViewChild} from '@angular/core';
import {NgxSnakeComponent, NgxSnakeModule} from 'ngx-snake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public registrationPage = 'registrationPage1';
  public title = 'Snake';
  public bw = false;
  public statusGame = "ready";
  public inputError = ''; 
  public score = 0;   
  public playerName = '';
  public playerEmail = '';
  public history = [];   

  @ViewChild('game')
  private _snake!: NgxSnakeComponent;


  public foodEaten() {
    this.score++;
    }

  public gameOver() {
    this.time = 0;
    this.pauseTimer();!
    this.statusGame = "over";
    alert('game over');
  }

  public gameStart() {
      this.statusGame = "started";
      this._snake.actionStart();
      this.startTimer();!
  }

  public gameStop() {
    this.statusGame = "paused";
    this._snake.actionStop();
    this.pauseTimer();!
  }

  public gameReset() {
    this.statusGame = "ready";
    this._snake.actionReset();
    this.time = 0;!
    this.display = '0';!
    this.pauseTimer();!
    this.clearHistory();!
  }

  public exitGame() {
    this.time = 0;!
    this.display = '0';!
    this.score = 0;
    this.history = [];
    this.statusGame = "ready";
    this._snake.actionReset();
    this.registrationPage = 'registrationPage1';
  }


}





