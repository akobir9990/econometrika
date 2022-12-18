import React from "react";
import one from "../svg/19/1.svg";
import two from "../svg/19/2.svg";
import three from "../svg/19/3.svg";
import four from "../svg/19/4.svg";
import five from "../svg/19/5.svg";
import six from "../svg/19/6.svg";
import seven from "../svg/19/7.svg";
import eight from "../svg/19/8.svg";
import nine from "../svg/19/9.svg";
import ten from "../svg/19/10.svg";
import eleven from "../svg/19/11.svg";
import twelve from "../svg/19/12.svg";
import thirteen from "../svg/19/13.svg";
import fourteen from "../svg/19/14.svg";
import fiveteen from "../svg/19/15.svg";
import sixteen from "../svg/19/16.svg";
import seventeen from "../svg/19/17.svg";
import eighteen from "../svg/19/18.svg";
import nineteen from "../svg/19/19.svg";
import twenty from "../svg/19/20.svg";
import twentyOne from "../svg/19/21.svg";
import twentyTwo from "../svg/19/22.svg";
import twentyThree from "../svg/19/23.svg";
import twentyFour from "../svg/19/24.svg";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function index() {
  const items = [
    { id: 1, url: one },
    { id: 2, url: two },
    { id: 3, url: three },
    { id: 4, url: four },
    { id: 5, url: five },
    { id: 6, url: six },
    { id: 7, url: seven },
    { id: 8, url: eight },
    { id: 9, url: nine },
    { id: 10, url: ten },
    { id: 11, url: eleven },
    { id: 12, url: twelve },
    { id: 13, url: thirteen },
    { id: 14, url: fourteen },
    { id: 15, url: fiveteen },
    { id: 16, url: sixteen },
    { id: 17, url: seventeen },
    { id: 18, url: eighteen },
    { id: 19, url: nineteen },
    { id: 20, url: twenty },
    { id: 21, url: twentyOne },
    { id: 22, url: twentyTwo },
    { id: 23, url: twentyThree },
    { id: 24, url: twentyFour },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="uppercase text-4xl font-bold"> занятия 19</h1>
        <NavLink to="/practice">
          <Button variant="outlined">назад</Button>
        </NavLink>
      </div>
      <div>
        {items.map((item) => (
          <img src={item.url} alt="???" />
        ))}
      </div>
    </div>
  );
}

export default index;
