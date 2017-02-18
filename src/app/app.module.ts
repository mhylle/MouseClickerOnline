import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MouseComponent } from './mouse/mouse.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import {ScoreService} from "./score.service";
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseComponent,
    ScoreboardComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
