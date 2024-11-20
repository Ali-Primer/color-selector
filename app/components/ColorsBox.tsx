import { Button, Flex, Space } from "antd";
import { useEffect, useState } from "react";

interface colorsBox {
  setColor: (color: string) => void;
}

export function ColorsBox({ setColor }: colorsBox) {
  function setToStorage(selectedColor: string) {
    localStorage.setItem("color", selectedColor);
    setColor(selectedColor);
  }

  return (
    <>
      <Flex className="justify-center my-56">
        <Space className="w-3/5 justify-around bg-slate-600 p-5 rounded-lg">
          <Button
            type="primary"
            className="w-56 h-56 text-7xl font-semibold bg-blue-600 hover:!bg-white hover:!text-blue-600"
            onClick={() => setToStorage("blue")}
          >
            Blue
          </Button>
          <Button
            type="danger"
            key="red"
            className="w-56 h-56 text-7xl font-semibold bg-red-600 hover:!bg-white hover:!text-red-600"
            onClick={() => setToStorage("red")}
          >
            Red
          </Button>
          <Button
            key="yellow"
            className="bg-yellow-500 border-solid w-56 h-56 text-7xl font-semibold border-0 hover:!bg-white hover:!text-yellow-500"
            onClick={() => setToStorage("yellow")}
          >
            Yellow
          </Button>
        </Space>
      </Flex>
    </>
  );
}
