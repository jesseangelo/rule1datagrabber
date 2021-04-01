import { Component, OnInit, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RATE } from "./rate";
import { FV } from "./fv";
import { PV } from "./pv";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // https://www.alphavantage.co/documentation/
  name = "DATA";
  key = "STJWWX6PCMUT17M";
  ticker = 'AMZN';
  bs_url = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${this.ticker}&apikey=${
    this.key
  }`;
  oview_url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${this.ticker}&apikey=${
    this.key
  }`;

  values = '';

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

  constructor(
    private httpClient: HttpClient,
    private rate: RATE,
    private fv: FV,
    private pv: PV
  ) {}

  // future growth rate
  // current EPS
  // forward PE
  // always 15%

  ngOnInit() {

    // this.httpClient.get(this.url).subscribe(console.log)
    // overview has EPS
    // overview has BookValue - need for growth rate
    // equity is totalAssets - totalLiabilities
    /* 
            "totalAssets": "155971000000",
            "totalLiabilities": "135244000000",
    */
    // overview has forwardPE
    // console.log(155971000000 - 135244000000) // 20727000000

    let eps, forwardPE;
    // this.httpClient.get(this.oview_url).subscribe(oview => {
    //   eps = +oview["EPS"];
    //   forwardPE = +oview["ForwardPE"];
    //   console.log(`current EPS ${eps} and forwardPE: ${forwardPE}`);

    //   // get Balance sheet
    //   this.httpClient.get(this.bs_url).subscribe(bs => {
    //     const annualReports = bs["annualReports"];
    //     let bookValue = [];
    //     annualReports.forEach(year => {
    //       console.log(
    //         `assets: ${+year.totalAssets} liabilites: ${+year.totalLiabilities} calc: ${+year.totalAssets -
    //           +year.totalLiabilities}`
    //       );
    //       bookValue.push(+year.totalAssets - +year.totalLiabilities);
    //     });
    //     console.log(bookValue);
    //     const growthRate = this.rate.calc(
    //       5,
    //       0,
    //       -1 * +bookValue[4],
    //       +bookValue[0]
    //     );
    //     console.log(growthRate);

    //     const futureEPS = this.fv.calc(growthRate, 10, 0, -1 * eps, 0);

    //     console.log(`future EPS: ${futureEPS}`);
    //     const futurePrice = futureEPS * forwardPE;
    //     console.log(`future price: ${futurePrice}`);

    //     const sticker = this.pv.calc(0.15, 10, 0, -1 * futurePrice, 0);
    //     console.log(`sticker price ${sticker}`);

    //     const MOS = sticker / 2;
    //     console.log(`MOS: ${MOS}`);
    //   });
    // });
  }

  mos() {
    console.log('hi ' + this.ticker)
  }
}
