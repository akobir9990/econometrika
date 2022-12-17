import { Button, Card } from "@mui/material";
import React from "react";

function index() {
  const items = [
    { id: 1, path: "/1", name: "" },
    { id: 2, path: "/2", name: "" },
    { id: 3, path: "/3", name: "" },
    { id: 4, path: "/4", name: "" },
    { id: 5, path: "/5", name: "" },
    { id: 6, path: "/6", name: "" },
    { id: 7, path: "/7", name: "" },
    { id: 8, path: "/8", name: "" },
    { id: 9, path: "/9", name: "" },
    { id: 10, path: "/10", name: "" },
    { id: 11, path: "/11", name: "" },
    { id: 12, path: "/12", name: "" },
    { id: 13, path: "/13", name: "" },
    { id: 14, path: "/14", name: "" },
    { id: 15, path: "/15", name: "" },
    { id: 16, path: "/16", name: "" },
    { id: 17, path: "/17", name: "" },
    { id: 18, path: "/18", name: "" },
    { id: 19, path: "/19", name: "" },
    { id: 20, path: "/20", name: "" },
  ];

  return (
    <div>
      <h1 className="items-center uppercase font-bold text-4xl flex flex-row justify-between">Практика</h1>
      {items.map((item) => (
        <Card
          key={item.id}
          className="max-w-[300px] min-w-[250px] py-[30px] my-5 p-3 border-[solid] border-[1px] border-[grey]"
        >
          <h1 className="text-2xl font-bold"> Занятия: {item.id}</h1>
          <div className="mt-[30px] flex justify-between">
            <Button variant="outlined">Открыть</Button>
            <Button variant="contained">Скачать</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default index;
