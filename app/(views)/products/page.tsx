import { FooterDesktop } from "@/app/components/desktop/FooterDesktop";
import { HeaderDesktop } from "@/app/components/desktop/HeaderDesktop";
import { HeaderProduct } from "@/app/components/global/product/HeaderProduct";
import { Products } from "@/app/components/global/product/Products";

export default function Product() {
  return (
    <>
      <HeaderDesktop />
      <HeaderProduct/>
      <Products/>
      <FooterDesktop />
    </>
  );
}
