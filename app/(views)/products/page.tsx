import { FooterDesktop } from "@/app/components/desktop/FooterDesktop";
import { HeaderDesktop } from "@/app/components/desktop/HeaderDesktop";
import { HeaderProduct } from "@/app/components/global/productBanner/HeaderProduct";

export default function Product() {
  return (
    <>
      <HeaderDesktop />
      <HeaderProduct/>
      <FooterDesktop />
    </>
  );
}
