import React from "react";
import Button from "@mui/material/Button";
import book from "../tutorial/учебныеПособие.pdf";

function index() {
  return (
    <div className="container">
      <div className="items-center uppercase font-bold text-4xl flex flex-row justify-between">
        <div>Учебные Пособие</div>
        <a href={book}>
          <Button variant="contained">Скачать</Button>
        </a>
      </div>
    </div>
  );
}
export default index;
