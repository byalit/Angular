import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { FormsModule } from '@angular/forms';
import { IntroComponent } from './intro/intro.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }