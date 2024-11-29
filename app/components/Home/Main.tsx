import { Provider } from "react-redux";
import { PopUp } from "../global/product/PopUp";
import { Products } from "../global/product/Products";
import { store } from "@/app/store/store";

export function Main() {
  return (
    <>
      <div className="relative flex">
        <Provider store={store}>
          <Products />
          <PopUp />
        </Provider>
      </div>
    </>
  );
}
