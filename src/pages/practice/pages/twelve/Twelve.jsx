import React from "react";
import one from "../svg/12/1.svg";
import two from "../svg/12/2.svg";
import three from "../svg/12/3.svg";
import four from "../svg/12/4.svg";
import five from "../svg/12/5.svg";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function index() {
  const items = [
    { id: 1, url: one },
    { id: 2, url: two },
    { id: 3, url: three },
    { id: 4, url: four },
    { id: 5, url: five },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1> practice 12</h1>
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
