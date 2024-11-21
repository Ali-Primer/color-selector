"use client";
import { useState } from "react";
import { ColorsBox } from "./components/ColorsBox";
import "./globals.css";

export default function Home() {
  const [color, setColor] = useState<string>("blue")

  function selectColorHandler(color: string){
    setColor(color)
  }
  return (
    <>
      <ColorsBox setColor={selectColorHandler}/>
    </>
  );
}
