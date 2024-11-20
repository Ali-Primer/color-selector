"use client";
import { useState } from "react";
import { ColorsBox } from "./components/ColorsBox";
import { HeaderPages } from "./components/HeaderPages";
import "./globals.css";

export default function Home() {
  const [color, setColor] = useState<string>()
  return (
    <>
      <HeaderPages color={color}/>
      <ColorsBox setColor={setColor}/>
    </>
  );
}
