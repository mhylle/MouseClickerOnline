import {Injectable} from '@angular/core';
import {Observable, Observer} from "rxjs";
import {UserService} from "./user.service";
import {NumbersService} from "./numbers.service";

@Injectable()
export class ScoreService {
  private _score: number[];
  scoreChange: Observable<number[]>;
  private _observer: Observer<any>;


  constructor(private userService: UserService, private numbersService: NumbersService) {
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
                let number = mps[j];
                for (let k = 2; k <= amount; k++) {
                  number = number * spawner.productionFactor;
                }
                mpsFinal[j] += Math.floor(number);
              }
            }
          }
        }
        this.incrementScore(mpsFinal);
      }
    });
  }
  decrementScore(amount: number[]) {
    let score = this.numbersService.subtract(this._score, amount);
    this.userService.user.score = score;
    this._score = score;
    if (this._observer) {
      this._observer.next(this._score);
    }

  }

  incrementScore(amount: number[]) {
    let score = this.numbersService.add(this._score, amount);
    this.userService.user.score = score;
    this._score = score;

    if (this._observer) {
      this._observer.next(this._score);
    }
  }


}
