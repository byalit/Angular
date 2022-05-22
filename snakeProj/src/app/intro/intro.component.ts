import { UserdataService } from './../userdata.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  public title = 'Snake';
  public inputError = '';


  public color: string = 'normal';
  public form = this._fb.group({
    name:[null,[Validators.required]],
    email:[null,[Validators.required]]
  })
  public get name() {return this.form.get('name');}
  public get email() {return this.form.get('email');}
  /*public get email() {return this.form.get('email');}*/

public constructor(
  private _router: Router,
  private _fb: FormBuilder,
  private _customerService: UserdataService) {}


public changeColor() {
  this.color = 'highContrast'
  // this.gameStartSubmit(color: string)
}
public gameStartSubmit(color: string){
  this.inputError = '';
  if(!(this.form.value.name.length >= 5)){
    this.inputError = 'Name must be at least 5 characters long!';
  }

  const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!emailValidation.test(String(this.form.value.email).toLowerCase())){
    this.inputError = 'Enter a valid mail!';
  }

  if(!this.inputError){
    this.inputError = '';
    this._customerService.setName(this.form.value.name)
    // this._router.navigate(['/high-scores']);
    color: this.color
    this._router.navigate(['/main',color]);
  }

}

  }



