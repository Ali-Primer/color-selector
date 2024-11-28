import Image from "next/image";

export function BannerDesktop() {
  return (
    <>
      <div className="flex justify-center w-full h-80 mt-6">
        <div className="hidden lg:flex w-4/5 h-full bg-gradient-to-l from-[#364099] to-[#40499A] justify-center items-center">
          <div className="flex flex-col items-center w-1/2">
            <Image
              alt="banner"
              src="/banner/market2.png"
              height={200}
              width={250}
            />
            <p className="font-extrabold text-white mt-6 text-2xl">
              هر چیز که در جستن آنی ... آنی
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
