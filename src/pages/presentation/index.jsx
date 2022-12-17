import { Button, Card } from "@mui/material";
import React from "react";

function index() {
  const items = [
    { id: 1, name: "Основы эконометрического моделирования", path: "" },
    { id: 2, name: "Основние понятие эконоическое статистики", path: "" },
    { id: 3, name: "Парный регрессионный анализ", path: "" },
    {
      id: 4,
      name: "Свойства коэффициентов регрессии. Условия Гаусса-Маркова",
      path: "",
    },
    { id: 5, name: "Множественный регрессионный анализ", path: "" },
    { id: 6, name: "Нелинейная регрессия", path: "" },
    { id: 7, name: "Система эконометрических моделей", path: "" },
    { id: 8, name: "Временные ряды и их виды", path: "" },
    {
      id: 9,
      name: "использования эконометрических моделей при прогнозировании экономических показателей",
      path: "",
    },
    { id: 10, name: "10-", path: "" },
    { id: 11, name: "11-", path: "" },
    { id: 12, name: "12-", path: "" },
  ];
  return (
    <div>
      <h1 className="uppercase font-bold">Презентации</h1>
      {items.map((item) => (
        <Card
          key={item.id}
          className="my-4 px-7 py-3 max-w-[300px] min-w-[250px]"
        >
          <h1 className="text-3xl p-3">Презентация-{item.id}</h1>
          <p className="p-3">{item.name}</p>
          <div className="flex justify-between m-2">
            <Button variant="outlined">открыть</Button>
            <Button variant="contained">скачать</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default index;
