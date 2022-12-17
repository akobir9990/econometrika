import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function index() {
  return (
    <div className="flex justify-between">
      <div className="text-4xl">sorry the page not found</div>
      <NavLink to="/">
        <Button variant="contained">go back home</Button>
      </NavLink>
    </div>
  );
}

export default index;
