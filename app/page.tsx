"use client";
import { Provider, useSelector } from "react-redux";
import "./globals.css";
import { store } from "./store/store";
import { MainMother } from "./components/Home/MainMother";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <MainMother />
      </Provider>
    </>
  );
}
