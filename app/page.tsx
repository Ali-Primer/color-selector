"use client";
import { FooterDesktop } from "./components/desktop/FooterDesktop";
import { HeaderDesktop } from "./components/desktop/HeaderDesktop";
import { Header } from "./components/global/Header";
import { Main } from "./components/Home/Main";
import "./globals.css";

export default function Home() {
  return (
    <>
      <HeaderDesktop/>
      <Header/>
      <Main/>
      <FooterDesktop/>
    </>
  );
}
