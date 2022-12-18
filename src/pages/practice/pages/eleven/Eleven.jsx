import React from "react";
import one from "../svg/11/1.svg";
import two from "../svg/11/2.svg";
import three from "../svg/11/3.svg";
import four from "../svg/11/4.svg";
import five from "../svg/11/5.svg";
import six from "../svg/11/6.svg";
import seven from "../svg/11/7.svg";
import eight from "../svg/11/8.svg";

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
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="uppercase text-4xl font-bold"> занятия 11</h1>
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
