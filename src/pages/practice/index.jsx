import { Button, Card } from "@mui/material";
import React from "react";

import one from "./pdf/1.pdf";
import two from "./pdf/2.pdf";
import three from "./pdf/3.pdf";
import four from "./pdf/4.pdf";
import five from "./pdf/5.pdf";
import six from "./pdf/6.pdf";
import seven from "./pdf/7.pdf";
import eight from "./pdf/8.pdf";
import nine from "./pdf/9.pdf";
import ten from "./pdf/10.pdf";
import eleven from "./pdf/11.pdf";
import twelve from "./pdf/12.pdf";
import thirteen from "./pdf/13.pdf";
import fourteen from "./pdf/14.pdf";
import fiveteen from "./pdf/15.pdf";
import sixteen from "./pdf/16.pdf";
import seventeen from "./pdf/17.pdf";
import eighteen from "./pdf/18.pdf";
import nineteen from "./pdf/19.pdf";
import twenty from "./pdf/20.pdf";
import { NavLink } from "react-router-dom";

function index() {
  const items = [
    { id: 1, path: "1", name: "", url: one },
    { id: 2, path: "2", name: "", url: two },
    { id: 3, path: "3", name: "", url: three },
    { id: 4, path: "4", name: "", url: four },
    { id: 5, path: "5", name: "", url: five },
    { id: 6, path: "6", name: "", url: six },
    { id: 7, path: "7", name: "", url: seven },
    { id: 8, path: "8", name: "", url: eight },
    { id: 9, path: "9", name: "", url: nine },
    { id: 10, path: "10", name: "", url: ten },
    { id: 11, path: "11", name: "", url: eleven },
    { id: 12, path: "12", name: "", url: twelve },
    { id: 13, path: "13", name: "", url: thirteen },
    { id: 14, path: "14", name: "", url: fourteen },
    { id: 15, path: "15", name: "", url: fiveteen },
    { id: 16, path: "16", name: "", url: sixteen },
    { id: 17, path: "17", name: "", url: seventeen },
    { id: 18, path: "18", name: "", url: eighteen },
    { id: 19, path: "19", name: "", url: nineteen },
    { id: 20, path: "20", name: "", url: twenty },
  ];

  return (
    <div>
      <h1 className="items-center uppercase font-bold text-4xl flex flex-row justify-between">
        Практика
      </h1>
      {items.map((item) => (
        <Card
          key={item.id}
          className="max-w-[300px] min-w-[250px] py-[30px] my-5 p-3 border-[solid] border-[1px] border-[grey]"
        >
          <h1 className="text-2xl font-bold"> Занятия: {item.id}</h1>
          <div className="mt-[30px] flex justify-between">
            <NavLink to={item.path}>
              <Button variant="outlined">Открыть</Button>
            </NavLink>
            <a href={item.url} download={item.id}>
              <Button variant="contained">Скачать</Button>
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default index;
