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
      <div className="bg-gradient-to-bl from-[#364099] to-[#40499A] h-1/3 w-full max-h-[450px] sm:h-[240px] rounded-b-lg flex flex-col items-center relative max-w-lg sm:rounded-none">
        <div className="flex justify-center mt-4 items-center flex-col">
          <img
            className="text-white p-0 border-4 rounded-full"
            width={60}
            src="/logo/logo.png"
            alt="Logo"
          />
          <span className="text-white mt-3 p-2 rounded-full text-center text-lg font-bold">
            ورود به پنل کاربری
          </span>
        </div>
        <div
          className="bg-white w-5/6 absolute top-36 p-3"
          style={{
            direction: "rtl",
            boxShadow: "10px 10px 0px 0px rgba(213,213,233,0.7)",
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
                شماره تلفن
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="h-10 w-full border border-gray-300 rounded p-2 focus:outline-none "
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center rtl:space-x-reverse">
              {/* <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
              >
                انصراف
              </button> */}
              <button
                type="submit"
                className="px-4 py-2 text-sm w-full border border-gray-400 bg-blue-500 text-white hover:bg-blue-600"
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
