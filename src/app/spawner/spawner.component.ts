import {Component, OnInit, Input} from "@angular/core";
import {Spawner} from "../Spawner";
import {ShopService} from "../shop/shop.service";
import {UserService} from "../services/user.service";
import {NumbersService} from "../services/numbers.service";
import {ScoreService} from "../services/score.service";

@Component({
  selector: 'spawner',
  templateUrl: './spawner.component.html',
  styleUrls: ['./spawner.component.css']
})
export class SpawnerComponent implements OnInit {
  @Input()
  spawner: Spawner;

  constructor(private shopService: ShopService, private userService: UserService, private scoreService: ScoreService) {
  }

  ngOnInit() {
  }

  convertToCost(spawner: Spawner) {
    return this.shopService.getUnit(spawner);
  }

  purchase(spawner: Spawner) {
    this.shopService.purchase(spawner);
  }


  canAfford() {
    let cost = this.shopService.calculateCost(this.userService.user, this.spawner);
    for (let i = cost.length - 1; i >= 0; i--) {
      if (this.userService.user.score && this.userService.user.score[i] > 0) {
        if (cost[i] == 0) {
          return false;
        }
        if (cost[i] <= this.userService.user.score[i]) {
          return false;
        }
      }

      if (cost[i] > 0) {
        return true;
      }
    }
    return true;
  }

  owned(spawner: Spawner) {
    if (this.userService.user.items) {
      for (let i = 0; i < this.userService.user.items.length; i++) {
        let obj = this.userService.user.items[i];
        if (spawner == obj.spawner) {
          return obj.amount;
        }
      }
    }
    return 0;
  }

  mps(spawner: Spawner) {
    if (this.userService.user.items) {
      for (let i = 0; i < this.userService.user.items.length; i++) {
        let obj = this.userService.user.items[i];
        if (spawner == obj.spawner) {
          return NumbersService.toMostSignificant(this.scoreService.calculateMps(obj.amount, spawner));
        }
      }
    }

    return NumbersService.toMostSignificant(spawner.mps);
  }


}
