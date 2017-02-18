import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ScoreService} from "../score.service";

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit,  OnDestroy {

  subscription: Subscription;
  score: number;

  constructor(private scoreService: ScoreService) {
  }

  ngOnInit() {
    this.score = this.scoreService.score;
    this.subscription = this.scoreService.scoreChange.subscribe(score => {
      this.score = score;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
