import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {UserService} from "./user.service";
import {NumbersService} from "./numbers.service";
import {Spawner} from "../Spawner";

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
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let result = this.calculateMps(item.amount, item.spawner);
        this.incrementScore(result);
      }
    });
  }

  calculateMps(amount: number, spawner: Spawner) {
    let mps = spawner.mps;
    let result: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < amount; j++) {
      if (j === 0) {
        result = NumbersService.multiply(mps, spawner.productionFactor);
      } else {
        result = NumbersService.add(result, NumbersService.multiply(mps, spawner.productionFactor));
      }
    }
    return result;
  }

  decrementScore(amount: number[]) {
    let score = NumbersService.subtract(this._score, amount);
    this.userService.user.score = score;
    this._score = score;
    if (this._observer) {
      this._observer.next(this._score);
    }
  }

  incrementScore(amount: number[]) {
    let score = NumbersService.add(this._score, amount);
    this.userService.user.score = score;
    this._score = score;

    if (this._observer) {
      this._observer.next(this._score);
    }
  }
}
