import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";
import {UserService} from "./user.service";
import {NumbersService} from "./numbers.service";
import {Spawner} from "../Spawner";

@Injectable()
export class ScoreService {
  private _score: number[];
  private _mps: number[];
  scoreChange: Observable<number[]>;
  mpsChange: Observable<number[]>;
  private _scoreObserver: Observer<any>;
  private _mpsObserver: Observer<any>;


  constructor(private userService: UserService) {
    this._score = this.userService.user.score;
    this.scoreChange = new Observable(observer => this._scoreObserver = observer).share();
    this.mpsChange = new Observable(observer => this._mpsObserver = observer).share();
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
    if (amount == 1) {
      if (Math.random() < spawner.critrate) {
        result = NumbersService.multiply(mps, spawner.critDamage);
      }
      return result;
    }

    result = mps;
    for (let i = 0; i < amount; i++) {
      result = NumbersService.multiply(result, spawner.productionFactor);
      result = NumbersService.add(result, mps);
    }
    if (Math.random() < spawner.critrate) {
      result = NumbersService.multiply(result, spawner.critDamage);
    }
    return result;
  }

  updateTotalMps() {
    let user = this.userService.user;
    let result: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    if (user.items) {
      for (let i = 0; i < user.items.length; i++) {
        let item = user.items[i];
        let mps = this.calculateMps(item.amount, item.spawner);
        result = NumbersService.add(result, mps);
      }
    }
    this._mps = result;
    if (this._mpsObserver) {
      this._mpsObserver.next(this._mps);
    }
  }

  decrementScore(amount: number[]) {
    let score = NumbersService.subtract(this._score, amount);
    this.userService.user.score = score;
    this._score = score;
    if (this._scoreObserver) {
      this._scoreObserver.next(this._score);
    }
  }

  incrementScore(amount: number[]) {
    let score = NumbersService.add(this._score, amount);
    this.userService.user.score = score;
    this._score = score;

    if (this._scoreObserver) {
      this._scoreObserver.next(this._score);
    }
  }
}
