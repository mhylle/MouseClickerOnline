import {Rule} from "./Rule";
import {Badge} from "./badge";
export class ClickRule implements Rule {
  badges: Badge[];
  awarded: number[]

  constructor() {
    this.awarded = [1, 10, 50, 250, 1000, 2500, 5000, 10000, 50000, 100000, 250000, 500000, 1000000];
  }

  handle(type: string): boolean {
    return type == "clicked";
  }

  execute(amount: number): boolean {
    for (let i = 0; i < this.awarded.length; i++) {
      if (this.awarded[i] === amount) {
        if (this.badges) {
          if (this.badges.length >= i) {
            return;
          }
          let badge = {
            id: "" +  amount,
            name: "Clicked " + amount + " times",
            description: "First time is always tough",
            rule: amount
          };
          console.log("You have been awarded a badge");
          this.badges.push(badge)
        } else {
          let badge = {
            id: "1",
            name: "Clicked " + amount + " times",
            description: "First time is always tough",
            rule: amount
          };
          console.log("You have been awarded a badge");
        }
      }
    }
    if (this.badges) {

    }
    return false;
  }

}
