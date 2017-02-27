import {Component, OnInit, OnDestroy, ChangeDetectorRef, AfterContentInit} from "@angular/core";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";
import {ScoreService} from "../services/score.service";
import {SpawnerService} from "../spawner/spawner.service";
import {NumbersService} from "../services/numbers.service";

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit,  OnDestroy, AfterContentInit  {
  scoreSubscription: Subscription;
  mpsSubscription: Subscription;
  score: number[];
  readableScore: string;
  currentMps: string;
  mps: number[];

  constructor(private userService: UserService, private scoreService: ScoreService, private cdr: ChangeDetectorRef) {
  }


  ngOnInit() {
    this.score = this.userService.user.score;

  }

  ngAfterContentInit(): void {
    this.readableScore = "0";
    this.currentMps= "0";
    this.mps = [0,0,0,0,0,0,0,0,0,0,0,0];
    this.scoreSubscription = this.scoreService.scoreChange.subscribe(score => {
      this.score = score;
      this.readableScore = "0";
      let denominator  = "";
      if (this.score) {
        for (let i = this.score.length; i >= 0; i--) {
          if (this.score[i] > 0) {
            if (denominator != "") {
              this.readableScore += "." + this.score[i] + " " + denominator;
              break;
            }
            denominator = NumbersService.units[i];
            this.readableScore = "" + this.score[i];
          }
        }
      }

    });
    this.mpsSubscription = this.scoreService.mpsChange.subscribe(mps => {
      this.mps = mps;
      this.currentMps = "0";
      let denominator  = "";
      if (this.mps) {
        for (let i = this.mps.length; i >= 0; i--) {
          if (this.mps[i] > 0) {
            if (denominator != "") {
              this.currentMps += "." + this.mps[i] + " " + denominator;
              break;
            }
            denominator = NumbersService.units[i];
            this.currentMps = "" + this.mps[i];
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.scoreSubscription.unsubscribe();
    this.mpsSubscription.unsubscribe();
  }

}
