import React from "react";
import one from "../svg/20/1.svg";
import two from "../svg/20/2.svg";
import three from "../svg/20/3.svg";
import four from "../svg/20/4.svg";
import five from "../svg/20/5.svg";
import six from "../svg/20/6.svg";
import seven from "../svg/20/7.svg";
import eight from "../svg/20/8.svg";
import nine from "../svg/20/9.svg";
import ten from "../svg/20/10.svg";
import eleven from "../svg/20/11.svg";

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
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1> practice 20</h1>
        <NavLink to="/practice">
          <Button variant="outlined">go to back</Button>
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
