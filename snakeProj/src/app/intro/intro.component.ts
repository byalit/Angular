import { UserdataService } from './../userdata.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
constructor(
  private _router: Router,
  private _customerService: UserdataService) { }
// @Output() playerName1 = new EventEmitter<string>();
public title = 'Snake';
public inputError = '';
public playerName = '';
public playerEmail = '';
public color: string = 'normal';

public availableColors = [
  'normal',
  'highContrast'
];

public gameStartSubmit(color: string){
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
    this._customerService.setName(this.playerName)
    // this._router.navigate(['/high-scores']);
    color: this.color
    this._router.navigate(['/main',color]);
    console.log(color)
  }

}

  }


