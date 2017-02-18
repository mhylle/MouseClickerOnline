import {Injectable} from '@angular/core';
import {Observable, Observer} from "rxjs";

@Injectable()
export class ScoreService {
  private _score: number;
  scoreChange: Observable<number>;
  private _observer: Observer<any>;

  constructor() {
    this._score = 0;
    this.scoreChange = new Observable(
      observer => this._observer = observer).share();
  }

  get score() {
    return this._score;
  }
  incrementScore(amount: number) {

    this._score += amount;
    console.log("Current Score: " + this._score);
    if (this._observer) {
      this._observer.next(this._score);
    }
  }
}
