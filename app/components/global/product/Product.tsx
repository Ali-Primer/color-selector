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

    function formatNumber(num : number):string {
        return num.toLocaleString();
    }

  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-t-lg border shadow-md">
        <div>
          <img src={product.img} alt={product.name} className="rounded-t-lg" />
        </div>
        <div className="flex w-11/12 justify-between mt-3 mb-3">
          <p className="text-nowrap">{product.name}</p>
          <p>{formatNumber(product.price)} تومان</p>
        </div>
      </div>
      <div
        className="border w-full flex justify-between items-center mt-2 mb-8"
        style={{
          boxShadow: "5px 5px 0px 0px rgba(213,213,233,0.7)",
        }}
      >
        <div className="w-2/3 flex justify-center">
          <div className="flex w-full justify-center gap-8">
            {/* heart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#2479FD"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>

            {/* info Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#2479FD"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
        </div>
        <button className="bg-green-700 text-white px-7 py-2">سفارش</button>
      </div>
    </div>
  );
}
