import React from "react";
import one from "../svg/13/1.svg";
import two from "../svg/13/2.svg";
import three from "../svg/13/3.svg";
import four from "../svg/13/4.svg";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function index() {
  const items = [
    { id: 1, url: one },
    { id: 2, url: two },
    { id: 3, url: three },
    { id: 4, url: four },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1> practice 13</h1>
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
