import React from "react";

import one from "./images/1.svg";
import two from "./images/2.svg";
import three from "./images/3.svg";
import four from "./images/4.svg";
import five from "./images/5.svg";
import six from "./images/6.svg";
import seven from "./images/7.svg";
import eight from "./images/8.svg";
import nine from "./images/9.svg";
import ten from "./images/10.svg";
import eleven from "./images/11.svg";
import twelve from "./images/12.svg";
import thirteen from "./images/13.svg";
import fourteen from "./images/14.svg";
import fifteen from "./images/15.svg";
import sixteen   from "./images/16.svg";
import seventeen from "./images/17.svg";
import eighteen from "./images/18.svg";
import nineteen from "./images/19.svg";
import twenty from "./images/20.svg";
import twentyOne from "./images/21.svg";
import twentyTwo from "./images/22.svg";
import twentyThree from "./images/23.svg";
import twentyFour from "./images/24.svg";
import twentyFive from "./images/25.svg";
import twentySix from "./images/26.svg";
import twentySeven from "./images/27.svg";
import twentyEight from "./images/28.svg";
import twentyNine from "./images/29.svg";
import thirty from "./images/30.svg";
import thirtyOne from "./images/31.svg";
import thirtyTwo from "./images/32.svg";
import thirtyThree from "./images/33.svg";
import thirtyFour from "./images/34.svg";
import thirtyFive from "./images/35.svg";
import thirtySix from "./images/36.svg";
import thirtySeven from "./images/37.svg";
import thirtyEight from "./images/38.svg";
import thirtyNine from "./images/39.svg";
import forty from "./images/40.svg";
import fortyOne from "./images/41.svg";
import fortyTWo from "./images/42.svg";
import fortyThree from "./images/43.svg";
import fortyFour from "./images/44.svg";
import fortyFive from "./images/45.svg";
import fortySix from "./images/46.svg";
import fortySeven from "./images/47.svg";
import fortyEight from "./images/48.svg";
import fortyNine from "./images/49.svg";
import fifty from "./images/50.svg";
import fiftyOne from "./images/51.svg";


import { Button } from "@mui/material";

function index() {
  const items = [
    { id: 1, url: one},
    { id: 2, url: two},
    { id: 3, url: three},
    { id: 4, url: four},
    { id: 5, url: five},
    { id: 6, url: six},
    { id: 7, url: seven},
    { id: 8, url: eight},
    { id: 9, url: nine},
    { id: 10, url: ten},
    { id: 11, url: eleven},
    { id: 12, url: twelve},
    { id: 13, url: thirteen},
    { id: 14, url: fourteen},
    { id: 15, url: fifteen},
    { id: 16, url: sixteen},
    { id: 17, url: seventeen},
    { id: 18, url: eighteen},
    { id: 19, url: nineteen},
    { id: 20, url: twenty},
    { id: 21, url: twentyOne},
    { id: 22, url: twentyTwo},
    { id: 23, url: twentyThree},
    { id: 24, url: twentyFour},
    { id: 25, url: twentyFive},
    { id: 26, url: twentySix},
    { id: 27, url: twentySeven},
    { id: 28, url: twentyEight},
    { id: 29, url: twentyNine},
    { id: 30, url: thirty},
    { id: 31, url: thirtyOne},
    { id: 32, url: thirtyTwo},
    { id: 33, url: thirtyThree},
    { id: 34, url: thirtyFour},
    { id: 35, url: thirtyFive},
    { id: 36, url: thirtySix},
    { id: 37, url: thirtySeven},
    { id: 38, url: thirtyEight},
    { id: 39, url: thirtyNine},
    { id: 40, url: forty},
    { id: 41, url: fortyOne},
    { id: 42, url: fortyTWo},
    { id: 43, url: fortyThree},
    { id: 44, url: fortyFour},
    { id: 45, url: fortyFive},
    { id: 46, url: fortySix},
    { id: 47, url: fortySeven},
    { id: 48, url: fortyEight},
    { id: 49, url: fortyNine},
    { id: 50, url: fifty},
    { id: 51, url: fiftyOne},
  ];
  return (
    <div>
      <div className="flex justify-between ">
        <h1>Guidlinies</h1>
        <Button variant="contained">Download</Button>
      </div>
      <div>
        {items.map((item) => (
          <img key={item.id} src={item.url} alt="?" />
        ))}
      </div>
    </div>
  );
}

export default index;
