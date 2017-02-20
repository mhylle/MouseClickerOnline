import {Injectable} from "@angular/core";

@Injectable()
export class NumbersService {

  constructor() {
  }

  add(o1: number[], o2: number[]): number[] {
    if (o1.length != o2.length) {
      return;
    }
    let result: number[] = [];
    for (let i = 0; i < o1.length; i++) {
      result.push(0);
    }
    for (let i = 0; i < o1.length; i++) {
      result[i] += o1[i] + o2[i];
      if (result[i] > 999) {
        if (i == result.length - 1) {
          result.push(Math.floor(result[i] - 1000));
          result[i] = result[i] - 1000;
        } else {
          let remainder = result[i] % 1000;
          let factor = Math.floor(result[i] / 1000);
          result[i] = remainder;
          result[i + 1] = result[i + 1] + factor;
        }
      }
    }
    console.log("Result: " + result);
    return result;
  }

  subtract(o1: number[], o2: number[]): number[] {
    console.log("subtracting");
    if (o1.length != o2.length) {
      return;
    }

    let result: number[] = [];

    for (let i = 0; i < o1.length; i++) {
      result.push(0);
    }

    for (let i = 0; i < o1.length; i++) {
      result[i] = o1[i] - o2[i];

      if (result[i] < 0) {
        if (i<result.length-1) {

          let mente = Math.abs(Math.floor(result[i] / 1000));

          result[i] = mente * 1000 - result[i];
          result[i + 1] -= mente;
        }
      }
    }
    return result;
  }
}
