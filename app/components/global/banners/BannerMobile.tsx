import Image from "next/image";

export function BannerMobile() {
  return (
    <>
      <div className="w-full h-32 bg-gradient-to-l from-[#364099] to-[#40499A] rounded-b-lg lg:hidden">
        <div className="w-full h-2/3 flex justify-center items-center">
          <div className="flex flex-col h-full justify-between items-center pt-3">
            <Image
              className="border-2 rounded-full p-0 flex"
              alt="logo"
              src="/logo/logo.png"
              width={40}
              height={30}
            />
            <p className="bg-white rounded-full text-xs p-1 flex">
              کانون تبلیغات آریا
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
