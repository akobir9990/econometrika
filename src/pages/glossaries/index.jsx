import React from "react";
import { Button } from "@mui/material";

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

import Glossaries from './pdf/Глоссарий.pdf'

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
      <div className="fitems-center uppercase font-bold text-4xl flex flex-row justify-between">
        <h1>Глоссарий</h1>
        <a href={Glossaries} download="Глоссарий">
          <Button variant="contained">Download</Button>
        </a>
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
