import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {UserService} from "../services/user.service";
import {ScoreService} from "../services/score.service";
import {SpawnerService} from "../spawner/spawner.service";

@Component({
  selector: 'scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit,  OnDestroy {
  subscription: Subscription;
  score: number[];
  readableScore: string;

  constructor(private userService: UserService, private scoreService: ScoreService, private spawnerService: SpawnerService) {
  }

  ngOnInit() {
    this.score = this.userService.user.score;
    this.subscription = this.scoreService.scoreChange.subscribe(score => {
      this.score = score;
      this.readableScore = "0";
      let denominator  = "";
      for (let i = this.score.length; i >= 0; i--) {
        if (this.score[i] > 0) {
          if (denominator != "") {
            this.readableScore +=  "." + this.score[i] +" " + denominator;
            break;
          }
          denominator = this.spawnerService.units[i];
          this.readableScore = "" + this.score[i];
        }

      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
