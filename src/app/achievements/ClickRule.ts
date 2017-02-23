import {Rule} from "./Rule";
export class ClickRule implements Rule {
  badges: any[];
  constructor() {

  }
  handle(type:string): boolean {
    return type == "clicked";

  }

  execute(amount: number): boolean {
    for (let i = 0; i < this.badges.length; i++) {
      let obj = this.badges[i];

    }
    return false;
  }

}
