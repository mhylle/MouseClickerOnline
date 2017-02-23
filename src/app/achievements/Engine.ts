import {Injectable} from '@angular/core';
import {Rule} from "./Rule";

@Injectable()
export class AchievementEngineService {

  rules: Rule[];
  constructor() {
  }

  addRule(rule: Rule) {
    this.rules.push(rule);
  }

  process(event: any, type: string) {
    for (let i = 0; i < this.rules.length; i++) {
      let rule = this.rules[i];
      if (rule.handle(type)){
        rule.execute(event);
      }

    }
  }
}
