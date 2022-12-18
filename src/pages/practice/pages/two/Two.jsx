import React from "react";
import one from "../svg/2/1.svg";
import two from "../svg/2/2.svg";
import three from "../svg/2/3.svg";
import four from "../svg/2/4.svg";
import five from "../svg/2/5.svg";
import six from "../svg/2/6.svg";

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
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="uppercase text-4xl font-bold"> занятия 2</h1>
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
