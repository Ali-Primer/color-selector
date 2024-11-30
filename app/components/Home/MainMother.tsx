import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { FooterDesktop } from "../desktop/FooterDesktop";
import { HeaderDesktop } from "../desktop/HeaderDesktop";
import { Header } from "../global/Header";
import { PopUp } from "../global/product/PopUp";
import { Main } from "./Main";
import { AppDispatch, RootState } from "@/app/store/store";
import { closePopUp } from "@/app/store/selectedID-slice";

export function MainMother() {
  const isPopUpOpened = useSelector((state: RootState) => state.ID.open);
  const popUpRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  function closePopUpHandler() {
    dispatch(closePopUp());
  }

  useEffect(() => {
    // کنترل overflow
    if (isPopUpOpened) {
      document.body.style.overflow = "hidden";

      // اسکرول سریع به بالای پاپ‌آپ
      if (popUpRef.current) {
        popUpRef.current.scrollIntoView({ behavior: "auto", block: "end" });
      }
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopUpOpened]);

  return (
    <div>
      <div
        onClick={closePopUpHandler}
        className={`bg-gray-300 opacity-50 absolute z-10 w-full h-screen ${
          isPopUpOpened ? "block" : "hidden"
        }`}
      ></div>
      <HeaderDesktop />
      <Header />
      {/* استفاده از ref برای پاپ‌آپ */}
      <div ref={popUpRef}>
        <PopUp />
      </div>
      <Main />
      <FooterDesktop />
    </div>
  );
}
