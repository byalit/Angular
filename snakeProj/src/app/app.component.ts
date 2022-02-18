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

   public gameStartSubmit() {
    this.inputError = '';
    if(!this.playerName.length){
      this.inputError = 'Enter Your name!';
    }
    
    const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailValidation.test(String(this.playerEmail).toLowerCase())){
      this.inputError = 'Enter a valid mail!';
    }

    if(!this.inputError){
      this.inputError = '';
      this.registrationPage = 'registrationPage2';
    }
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
    this.registrationPage = 'registrationPage1';
  }


}





