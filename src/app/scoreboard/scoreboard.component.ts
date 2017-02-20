import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";
import {ScoreService} from "../services/score.service";

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit,  OnDestroy {
  subscription: Subscription;
  score: number[];
  readableScore: string;

  constructor(private userService: UserService, private scoreService: ScoreService) {
  }

  ngOnInit() {
    this.score = this.userService.user.score;
    this.subscription = this.scoreService.scoreChange.subscribe(score => {
      this.score = score;
      this.readableScore = "0";
      for (let i = this.score.length; i > 0; i--) {
        if (this.score[i] > 0) {

        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
