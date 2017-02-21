import {Injectable} from "@angular/core";

@Injectable()
export class NumbersService {

  constructor() {
  }

  static add(o1: number[], o2: number[]): number[] {
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

  static subtract(o1: number[], o2: number[]): number[] {
    if (o1.length != o2.length) {
      return;
    }

    let result: number[] = [];

    for (let i = 0; i < o1.length; i++) {
      result.push(0);
    }
    let factor = 0;
    for (let i = 0; i < o1.length; i++) {
      result[i] = o1[i] - o2[i] - factor;

      if (result[i] < 0) {
        let remainder = Math.abs(result[i] % 1000);
        factor = Math.ceil(Math.abs(result[i] / 1000));
        if (i < result.length - 1) {
          result[i] = 1000 - remainder;
        } else {
          // o2 was larger then o1, define this to be 0 as we do not tolerate negative numbers
          for (let j = 0; j < result.length; j++) {
            result[j] = 0;
          }
        }
      } else {
        factor = 0;
      }
    }
    return result;
  }

  static multiply(o1: number[], factor: number) {
    let result: number[] = [];

    for (let i = 0; i < o1.length; i++) {
      if (result.length === i) {
        result.push(Math.round(o1[i] * factor));
      } else {
        result[i] += Math.round(o1[i] * factor);
      }
      if (result[i] > 999) {
        let remainder = result[i] % 1000;
        let factor = Math.floor(result[i] / 1000);
        result[i] = remainder;
        result.push(factor);
      }
    }
    return result;
  }
}
