import { Injectable } from "@angular/core";

/*
 Calculate FV. 
 Exact same Excel FV function
 Rate is the interest rate per period.
 Nper is the total number of payment periods in an annuity.
 Pmt is the payment made each period; it cannot change over the life of the annuity. Pmt must be entered as a negative number.
 Pv is the present value, or the lump-sum amount that a series of future payments is worth right now. If pv is omitted, it is assumed to be 0 (zero). PV must be entered as a negative number.
 Type is the number 0 or 1 and indicates when payments are due. If type is omitted, it is assumed to be 0 which represents at the end of the period.  If payments are due at the beginning of the period, type should be 1.
 */
@Injectable({
  providedIn: "root"
})
export class FV {
  calc(rate, nper, pmt, pv, type) {
    var pow = Math.pow(1 + rate, nper),
      fv;

    pv = pv || 0;
    type = type || 0;

    if (rate) {
      fv = (pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow;
    } else {
      fv = -1 * (pv + pmt * nper);
    }
    return fv;
  }
}
