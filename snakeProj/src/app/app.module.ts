import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { FormsModule } from '@angular/forms';
import { IntroComponent } from './intro/intro.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HighscoresComponent } from './highscores/highscores.component';
import { OrderPipe } from './order.pipe';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        MainComponent,
        HighscoresComponent,
        OrderPipe,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'main/:color', component: MainComponent },
            { path: 'intro', component: IntroComponent },
            { path: 'high-scores', component: HighscoresComponent },
            { path: '**', redirectTo: '/intro' }
        ]),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }