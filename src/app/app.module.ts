import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MouseComponent } from './mouse/mouse.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import {ScoreService} from "./services/score.service";
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import {UserService} from "./services/user.service";
import {ShopService} from "./shop/shop.service";
import { SpawnerComponent } from './spawner/spawner.component';
import {SpawnerService} from "./spawner/spawner.service";
import {NumbersService} from "./services/numbers.service";
import {AchievementEngineService} from "./achievements/Engine";
import { BadgeComponent } from './achievements/badge/badge.component';
import { RibbonComponent } from './achievements/ribbon/ribbon.component';
import {BadgeService} from "./services/badge.service";

@NgModule({
  declarations: [
    AppComponent,
    MouseComponent,
    ScoreboardComponent,
    ShopComponent,
    UserComponent,
    SpawnerComponent,
    BadgeComponent,
    RibbonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, ScoreService, ShopService, SpawnerService, NumbersService, AchievementEngineService, BadgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
