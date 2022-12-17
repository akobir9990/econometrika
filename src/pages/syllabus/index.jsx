import { Button } from "@mui/material";
import React from "react";

import one from "./img/1.svg";
import two from "./img/2.svg";
import three from "./img/3.svg";
import four from "./img/4.svg";
import five from "./img/5.svg";
import six from "./img/6.svg";
import seven from "./img/7.svg";
import eight from "./img/8.svg";
import nine from "./img/9.svg";

function index() {
  const items = [
    { id: 1, name: "", url: one },
    { id: 2, name: "", url: two },
    { id: 3, name: "", url: three },
    { id: 4, name: "", url: four },
    { id: 5, name: "", url: five },
    { id: 6, name: "", url: six },
    { id: 7, name: "", url: seven },
    { id: 8, name: "", url: eight },
    { id: 9, name: "", url: nine },
  ];
  return (
    <div>
      <div className="items-center uppercase font-bold text-4xl flex flex-row justify-between">
        <h1 className="font-bold text-4xl">Syllabus</h1>
        <Button variant="outlined">Download</Button>
      </div>
      {items.map((item) => (
        <img key={item.id} src={item.url} alt="???" />
      ))}
    </div>
  );
}

export default index;
