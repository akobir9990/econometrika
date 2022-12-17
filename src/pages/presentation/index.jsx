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
import { NavLink } from "react-router-dom";

function index() {
  const items = [
    {
      id: 1,
      name: "Основы эконометрического моделирования",
      path: "1",
      url: one,
    },
    {
      id: 2,
      name: "Основние понятие эконоическое статистики",
      path: "2",
      url: two,
    },
    { id: 3, name: "Парный регрессионный анализ", path: "3", url: three },
    {
      id: 4,
      name: "Свойства коэффициентов регрессии. Условия Гаусса-Маркова",
      path: "4",
      url: four,
    },
    { id: 5, name: "Множественный регрессионный анализ", path: "5", url: five },
    { id: 6, name: "Нелинейная регрессия", path: "6", url: six },
    { id: 7, name: "Система эконометрических моделей", path: "7", url: seven },
    { id: 8, name: "Временные ряды и их виды", path: "8", url: eight },
    {
      id: 9,
      name: "использования эконометрических моделей при прогнозировании экономических показателей",
      path: "9",
      url: nine,
    },
    { id: 10, name: "10-", path: "10", url: ten },
  ];
  return (
    <div>
      <h1 className="items-center uppercase font-bold text-4xl flex flex-row justify-between">
        Презентации
      </h1>
      {items.map((item) => (
        <Card
          key={item.id}
          className="my-4 px-7 py-3 max-w-[300px] min-w-[250px] border-[1px] border-[solid] border-[grey] "
        >
          <h1 className="text-3xl p-3">Презентация-{item.id}</h1>
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
