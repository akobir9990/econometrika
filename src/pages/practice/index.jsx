import { Button, Card } from "@mui/material";
import React from "react";

function index() {
  const items = [
    { id: 1, path: "/1" },
    { id: 2, path: "/2" },
    { id: 3, path: "/3" },
    { id: 4, path: "/4" },
    { id: 5, path: "/5" },
    { id: 6, path: "/6" },
    { id: 7, path: "/7" },
    { id: 8, path: "/8" },
    { id: 9, path: "/9" },
    { id: 10, path: "/10" },
    { id: 11, path: "/11" },
    { id: 12, path: "/12" },
    { id: 13, path: "/13" },
    { id: 14, path: "/14" },
    { id: 15, path: "/15" },
    { id: 16, path: "/16" },
    { id: 17, path: "/17" },
    { id: 18, path: "/18" },
    { id: 19, path: "/19" },
    { id: 20, path: "/20" },
  ];

  return (
    <div>
      <h1 className="uppercase font-bold text-4xl py-4">Practice</h1>
      {items.map((item) => (
        <Card
          key={item.id}
          className="max-w-[300px] min-w-[250px] py-[30px] my-5 p-3 border-[solid] border-[1px] border-[grey]"
        >
          <h1 className="text-2xl font-bold"> Practice: {item.id}</h1>
          <div className="mt-[30px] flex justify-between">
            <Button variant="outlined">Open</Button>
            <Button variant="contained">Download</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default index;
