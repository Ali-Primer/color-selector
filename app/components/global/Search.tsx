export function Search() {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-16 w-3/4 bg-white mt-[-33px] border border-gray-400 flex items-center px-6">
          <input
            className="w-full py-2 px-2 outline-none"
            placeholder="آنچه در جست و جو آنی را بنویس..."
            type="text"
          />
        </div>
      </div>
    </>
  );
}
