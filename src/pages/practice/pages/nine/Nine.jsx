import React from "react";
import one from "../svg/9/1.svg";
import two from "../svg/9/2.svg";
import three from "../svg/9/3.svg";
import four from "../svg/9/4.svg";
import five from "../svg/9/5.svg";
import six from "../svg/9/6.svg";
import seven from "../svg/9/7.svg";
import eight from "../svg/9/8.svg";
import nine from "../svg/9/9.svg";
import ten from "../svg/9/10.svg";
import eleven from "../svg/9/11.svg";
import twelve from "../svg/9/12.svg";
import thirteen from "../svg/9/13.svg";
import fourteen from "../svg/9/14.svg";
import fiveteen from "../svg/9/15.svg";
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
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="uppercase text-4xl font-bold"> занятия 9</h1>
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
