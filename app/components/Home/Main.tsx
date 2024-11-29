import { PopUp } from "../global/product/PopUp";
import { Products } from "../global/product/Products";

export function Main() {
  return (
    <>
    <div className="relative flex">
      <Products/>
      <PopUp/>
    </div>
    </>
  );
}
