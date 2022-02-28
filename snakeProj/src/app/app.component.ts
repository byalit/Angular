import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public playerName1 = '';
  public registrationPage = true;
  public registrationPage1 = false;

  public onGamePage($event: string) {
    this.playerName1 = $event;
    this.registrationPage = !this.registrationPage;
    this.registrationPage1 = !this.registrationPage1;
  }
  public exitGame() {
    
    this.registrationPage = !this.registrationPage;
    this.registrationPage1 = !this.registrationPage1;
  }
}




