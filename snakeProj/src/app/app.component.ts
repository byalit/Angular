import { Component, ViewChild } from '@angular/core';
import {NgxSnakeComponent, NgxSnakeModule} from 'ngx-snake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public registrationPage = true;
  public registrationPage1 = false;
  public bw = false;
  public title = 'Snake';
  public statusGame = "ready";
  public playerName = '';
  public playerName1 = '';
  public playerEmail = '';
  public score = 0;   
  public history = [];
  // public showStartGamePage1 = {
    // title : 'Snake',
    // playerName : '',
    // playerEmail :'',
    

  time: number = 0;
  display: string= '0';
  interval: any;

  startTimer() {
    this.time = 0;
    this.interval = setInterval(() => {
      if (this.time >= 0) {
        this.time++;
      } 
      this.display = this.time.toString();
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  clearHistory(){
    this.history =[];
  }

  
   
  @ViewChild('game')
  private _snake!: NgxSnakeComponent;


  public foodEaten() {
    this.score++;
    }

  public gameOver() {
    this.time = 0;
    this.pauseTimer();
    this.statusGame = "over";
    alert('game over');
  }

  public gameStart() {
      this.statusGame = "started";
      this._snake.actionStart();
      this.startTimer();
  }

  public gameStop() {
    this.statusGame = "paused";
    this._snake.actionStop();
    this.pauseTimer();
  }

  public gameReset() {
    this.statusGame = "ready";
    this._snake.actionReset();
    this.time = 0;
    this.display = '0';
    this.pauseTimer();
    this.clearHistory();
  }

  public exitGame() {
    this.time = 0;
    this.display = '0';
    this.score = 0;
    this.history = [];
    this.statusGame = "ready";
    this._snake.actionReset();
    this.registrationPage = !this.registrationPage;
    this.registrationPage1 = !this.registrationPage1;
  }

  public onGamePage($event: string) {
    this.playerName1 = $event;
    this.registrationPage = !this.registrationPage;
    this.registrationPage1 = !this.registrationPage1;
    
  }


}





