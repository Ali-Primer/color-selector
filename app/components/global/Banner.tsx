import { BannerDesktop } from "./banners/BannerDesktop";
import { BannerMobile } from "./banners/BannerMobile";

export function Banner() {
  return (
    <>
      <BannerMobile />
      <BannerDesktop />
    </>
  );
}
