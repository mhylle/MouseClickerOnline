import { Injectable } from '@angular/core';
import {Badge} from "../achievements/badge";
import {Observable, Observer} from "rxjs";

@Injectable()
export class BadgeService {
  private _badges: Badge[] = [];
  badgeChange: Observable<Badge[]>;
  private _badgeObserver: Observer<any>;

  constructor() {
    this.badgeChange = new Observable(observer => this._badgeObserver = observer).share();
  }

  addBadge(badge: Badge) {
    this._badges.push(badge);
    if (this._badgeObserver) {
      this._badgeObserver.next(this._badges);
    }
  }

  get badges(): Badge[] {
    return this._badges
  }

}
