import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  @Output() playerName1 = new EventEmitter<string>();
// public registrationPage = 'registrationPage1';
public title = 'Snake';
public inputError = ''; 
public playerName = '';
public playerEmail = '';
// public showStartGamePage = {
//   title : 'Snake',
//   playerName : '',
//   playerEmail :'',
// }


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
    this.playerName1.emit(this.playerName)
  }
  
 }     
//  public pushNamePlayer1() {
//   this.playerName1.emit(this.playerName)
//  }   
}
