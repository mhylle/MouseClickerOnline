import {Injectable} from '@angular/core';
import {Observable, Observer} from "rxjs";
import {UserService} from "./user.service";

@Injectable()
export class ScoreService {
  private _score: number[];
  scoreChange: Observable<number[]>;
  private _observer: Observer<any>;


  constructor(private userService: UserService) {
    this._score = this.userService.user.score;
    this.scoreChange = new Observable(observer => this._observer = observer).share();
    let timer = Observable.timer(0, 1000);
    timer.subscribe(t => {
      let items = this.userService.user.items;
      let mpsFinal: number[];
      for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let spawner = item.spawner;
        let amount = item.amount;
        let mps = spawner.mps;
        mpsFinal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let j = 0; j < mps.length; j++) {
          if (mps[j] > 0) {
            if (amount > 0) {
              if (amount == 1) {
                mpsFinal[j] += mps[j];
              } else {
                mpsFinal[j] += mps[j];
                for (let k = 2; k <= amount; k++) {
                  mpsFinal[j] += Math.floor(mps[j] * spawner.productionFactor);
                }
              }
            }
          }
        }
        this.incrementScore(mpsFinal);
      }
    });
  }

  incrementScore(amount: number[]) {
    for (let i = 0; i < amount.length; i++) {
      if (amount[i] > 0) {
        let newScore = this._score[i] + amount[i];
        if (newScore > 999) {
          this._score[i] = newScore - 1000;
          this._score[i + 1] += 1;
        } else {
          this._score[i] += amount[i];
        }
        this.userService.user.score = this._score;
      }
    }
    if (this._observer) {
      this._observer.next(this._score);
    }
  }


}
