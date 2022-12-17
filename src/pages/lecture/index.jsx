import { Button, Card } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";
import one from "../lecture/pdf/1.pdf";
import two from "../lecture/pdf/2.pdf";
import three from "../lecture/pdf/3.pdf";
import four from "../lecture/pdf/4.pdf";
import five from "../lecture/pdf/5.pdf";
import six from "../lecture/pdf/6.pdf";
import seven from "../lecture/pdf/7.pdf";
import eight from "../lecture/pdf/8.pdf";
import nine from "../lecture/pdf/9.pdf";
import ten from "../lecture/pdf/10.pdf";

function index() {
  const items = [
    { id: 1, name: "лекция-1", path: "", url: one },
    { id: 2, name: "лекция-2", path: "", url: two },
    { id: 3, name: "лекция-3", path: "", url: three },
    { id: 4, name: "лекция-4", path: "", url: four },
    { id: 5, name: "лекция-5", path: "", url: five },
    { id: 6, name: "лекция-6", path: "", url: six },
    { id: 7, name: "лекция-7", path: "", url: seven },
    { id: 8, name: "лекция-8", path: "", url: eight },
    { id: 9, name: "лекция-9", path: "", url: nine },
    { id: 10, name: "лекция-10", path: "", url: ten },
  ];
  return (
    <div className="">
      <h1 className="items-center uppercase font-bold text-4xl flex flex-row justify-between">Тексты лекции</h1>
      {items.map((item) => (
        <Card
          key={item.id}
          className="my-4 px-7 py-3 max-w-[300px] min-w-[250px]"
        >
          <h1 className="text-3xl p-3">лекция-{item.id}</h1>
          <p className="p-3">{item.name}</p>
          <div className="flex justify-between m-2">
            <NavLink to={item.path}>
              <Button variant="outlined">открыть</Button>
            </NavLink>
            <a href={item.url} download={item.name}>
              <Button variant="contained">скачать</Button>
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default index;
