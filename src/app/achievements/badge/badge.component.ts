import {Component, OnInit, OnDestroy} from "@angular/core";
import {BadgeService} from "../../services/badge.service";
import {Subscription} from "rxjs";
import {Badge} from "../badge";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit, OnDestroy {
  private badgeSubscription: Subscription;
  private badges: Badge[];

  constructor(private badgeService: BadgeService) {
  }

  ngOnInit() {
    this.badgeSubscription = this.badgeService.badgeChange.subscribe(badges => {
      this.badges = badges;
    });
  }

  ngOnDestroy(): void {
    this.badgeSubscription.unsubscribe();
  }

}
