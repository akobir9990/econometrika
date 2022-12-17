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
import { Button } from "@mui/material";

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
      <div className="flex justify-between ">
        <h1>Glossaries</h1>
        <Button variant="contained">Download</Button>
      </div>
      <div>
        {items.map((item) => (
          <img key={item.id} src={item.url} alt="???" />
        ))}
      </div>
    </div>
  );
}

export default index;
