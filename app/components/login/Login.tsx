"use client";
import { useRouter } from "next/navigation";

export function Login() {
  const route = useRouter();

  const handleLogin = (values: any) => {
    console.log("Submitted values: ", values);
    route.push("/");
  };

  const handleCancel = () => {
    console.log("Login canceled");
  };

  return (
    <div className="h-screen flex justify-center sm:items-center">
      <div className="bg-gradient-to-bl from-[#364099] to-[#40499A] h-2/3 w-full max-h-[450px] rounded-b-lg flex flex-col items-center relative max-w-lg sm:rounded-none sm:h-[400px]">
        <div className="flex justify-center mt-4 items-center flex-col">
          <img
            className="text-white p-0 border-4 rounded-full"
            width={50}
            src="/logo/logo.png"
            alt="Logo"
          />
          <span className="bg-white mt-3 p-2 rounded-full text-center text-xs font-bold sm:bg-orange-500">
            ورود به پنل کاربری
          </span>
        </div>
        <div
          className="bg-white w-5/6 absolute top-40 p-3"
          style={{
            direction: "rtl",
            boxShadow: "15px 15px 0px 0px rgba(213,213,233,0.7)",
          }}
        >
          <form
            className="w-full text-right space-y-6 sm:space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const values = Object.fromEntries(formData.entries());
              handleLogin(values);
            }}
          >
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-3">
                نام کاربری
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="h-10 w-full border border-gray-300 rounded p-2 focus:outline-none "
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-3">
                رمز عبور
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="h-10 w-full border border-gray-300 rounded p-2 focus:outline-none"
              />
            </div>

            {/* Info */}
            <div className="flex items-center text-xs text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="orange"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
              </svg>
              به طور پیشفرض نام کاربری و رمز عبور کد ملی شماست
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-x-3 space-x-2 rtl:space-x-reverse">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                ورود
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
