import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PV {
  calc(rate, periods, payment, future, type) {
    // Initialize type
    var type = typeof type === "undefined" ? 0 : type;

    // Evaluate rate and periods (TODO: replace with secure expression evaluator)
    rate = eval(rate);
    periods = eval(periods);

    // Return present value
    if (rate === 0) {
      return -payment * periods - future;
    } else {
      return (
        (((1 - Math.pow(1 + rate, periods)) / rate) *
          payment *
          (1 + rate * type) -
          future) /
        Math.pow(1 + rate, periods)
      );
    }
  }
}
