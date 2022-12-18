import React from "react";
import one from "../svg/17/1.svg";

import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function index() {
  const items = [
    { id: 1, url: one },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="uppercase text-4xl font-bold"> занятия 17</h1>
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
