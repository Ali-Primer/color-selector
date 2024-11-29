import Image from "next/image";

interface singleProduct {
  id: number;
  name: string;
  img: string;
  price: number;
}

interface product {
  product: singleProduct;
}

export function Product({ product }: product) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center border shadow-md">
        <div className="w-full bg-white h-10 flex flex-row-reverse items-center">
          <div className="flex gap-2 items-center pl-3">
            {/* info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>

            {/* save icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </div>
        </div>
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <div className="flex w-11/12 justify-center mt-3 mb-3">
          <p className="text-nowrap text-center">{product.name}</p>
        </div>

        <button
          style={{
            boxShadow: "3px 3px 0px 0px rgba(0,0,0,1)",
          }}
          className="bg-green-700 text-white px-7 py-2 my-5"
        >
          موزعین این محصول
        </button>
      </div>
    </div>
  );
}
