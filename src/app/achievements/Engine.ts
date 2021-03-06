import {Injectable} from '@angular/core';
import {Rule} from "./Rule";
import {BadgeService} from "../services/badge.service";

@Injectable()
export class AchievementEngineService {

  rules: Rule[] = [];

  constructor(private badgeService: BadgeService) {
  }

  addRule(rule: Rule) {
    this.rules.push(rule);
  }

  process(event: any, type: string) {
    if (this.rules) {
      for (let i = 0; i < this.rules.length; i++) {
        let rule = this.rules[i];
        if (rule.handle(type)) {
          rule.execute(event, this.badgeService);
        }
      }
    }
  }
}
