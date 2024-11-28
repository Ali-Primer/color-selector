import Image from "next/image";
import Link from "next/link";

export function HeaderDesktop() {
  return (
    <>
      <div className="hidden w-full h-20 shadow-zinc-300 shadow-lg lg:flex justify-center">
        <div className="w-4/5 flex justify-between h-full">
          {/* right header */}
          <div className="h-full items-center flex w-[40%] justify-between">
            <div className="flex items-center h-full">
              <Image
                className="flex items-center"
                alt="logo"
                src="/logo/logobig.png"
                width={100}
                height={100}
              />
            </div>
            <div className="flex w-8/12 justify-between text-gray-600 text-sm">
              <div className="flex gap-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                انتخاب شهر
              </div>
            </div>
          </div>

          {/* left header */}
          <div className="flex items-center justify-between w-7/12 text-gray-600">
            <button
              className="flex gap-x-1 text-sm border-gray-400 border py-1 px-3"
              style={{ boxShadow: "3px 3px 0px 0px rgba(213,213,233,1)" }}
            >
              نشان شده ها
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
            <button
              className="flex gap-x-2 text-sm border-gray-400 border py-1 px-3"
              style={{ boxShadow: "3px 3px 0px 0px rgba(213,213,233,1)" }}
            >
              سبد سفارش
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
            <button
              className="flex gap-x-2 text-sm border-gray-400 border py-1 px-3"
              style={{ boxShadow: "3px 3px 0px 0px rgba(213,213,233,1)" }}
            >
              پروفایل
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </button>

            <button
              className="flex gap-x-2 text-sm border-gray-400 border py-1 px-3"
              style={{ boxShadow: "3px 3px 0px 0px rgba(213,213,233,1)" }}
            >
              اعلان
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
