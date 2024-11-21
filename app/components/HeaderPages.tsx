"use client";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const menu: React.CSSProperties = {
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
};

export const HeaderPages = () => {
  const [color, setColor] = useState<string | null>("blue");
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  useEffect(() => {
    const color: string | null = localStorage.getItem("color");
    setColor(color === null ? "blue" : color);
  }, []);

  return (
    <Menu
      className={`${
        color === "red"
          ? "bg-red-600"
          : color === "blue"
          ? "bg-blue-600"
          : "bg-yellow-500"
      }`}
      style={menu}
      mode="horizontal"
    >
      <Menu.Item key="home" onClick={() => handleNavigation("/")}>
        Home
      </Menu.Item>
      <Menu.Item
        key="secondPage"
        onClick={() => handleNavigation("/second-page")}
      >
        Second Page
      </Menu.Item>
    </Menu>
  );
};
