import { Button, Flex, Space } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ColorsBox() {
  function setToStorage(selectedColor: string) {
    localStorage.setItem("color", selectedColor);
  }

  return (
    <>
      <Flex className="justify-center my-56">
        <Space className="w-3/5 justify-around bg-slate-600 p-5 rounded-lg">
          <Link href={"/second-page"}>
            <Button
              type="primary"
              className="w-56 h-56 text-7xl font-semibold bg-blue-600 hover:!bg-white hover:!text-blue-600"
              onClick={() => setToStorage("blue")}
            >
              Blue
            </Button>
          </Link>
          <Link href={"/second-page"}>
            <Button
              key="red"
              className="w-56 h-56 text-7xl font-semibold bg-red-600 text-white border-0 hover:!bg-white hover:!text-red-600"
              onClick={() => setToStorage("red")}
            >
              Red
            </Button>
          </Link>
          <Link href={"/second-page"}>
            <Button
              key="yellow"
              className="w-56 h-56 text-7xl font-semibold bg-yellow-500 text-white border-0 hover:!bg-white hover:!text-yellow-500"
              onClick={() => setToStorage("yellow")}
            >
              Yellow
            </Button>
          </Link>
        </Space>
      </Flex>
    </>
  );
}
