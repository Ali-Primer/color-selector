"use client";
import { FooterDesktop } from "./components/desktop/FooterDesktop";
import { HeaderDesktop } from "./components/desktop/HeaderDesktop";
import { Header } from "./components/global/Header";
import "./globals.css";

export default function Home() {
  return (
    <>
      <HeaderDesktop/>
      <Header/>
      <FooterDesktop/>
    </>
  );
}
