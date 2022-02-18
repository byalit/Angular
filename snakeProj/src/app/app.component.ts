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
}





