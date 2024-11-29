'use client'
import { useState } from "react";

interface sellerProps {
  name: string;
  distance: number;
  result: number;
  price: number;
}

interface seller {
  seller: sellerProps;
}

export function Seller({ seller }: seller) {
    const [totalCost, setTotalCost] = useState<number>(0)
  function totalPriceHandler(e: number): void {
     setTotalCost(e * seller.price)
  }

  return (
    <>
      <div className="mt-4 border-b border-black">
        <div className="flex w-full justify-between">
          <div className="flex w-1/2 justify-between">
            <p className=" hover:text-blue-300">{seller.name}</p>
            <p>فاصله تا شما {seller.distance} کیلومتر</p>
            <p
              className={`${
                seller.result >= 4
                  ? "text-green-500"
                  : seller.result > 2
                  ? "text-yellow-300"
                  : "text-red-600"
              }`}
            >
              عملکرد{" "}
              {seller.result >= 4
                ? "خوب"
                : seller.result > 2
                ? "متوسط"
                : "ضعیف"}
            </p>
          </div>
          <p>
            قیمت فروش واحد <span>{seller.price.toLocaleString()} تومان</span>
          </p>
        </div>

        {/* form */}
        <div className="flex justify-between pr-6 my-9">
          <div className="flex">
            <div>
              <label htmlFor="number">تعداد:</label>
              <input
                style={{ boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
                className="border border-black w-20 mr-3 text-center"
                id="number"
                type="number"
                onChange={(e) => totalPriceHandler(Number(e.target.value))}
              />
            </div>
            <div className="flex mr-10">
              <p>تخفیف:</p>
              <div
                style={{ boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
                className="border border-black w-20 mr-3 h-6 bg-gray-300 text-center"
              ></div>
            </div>
            <div className="flex mr-10">
              <p>قیمت کل:</p>
              <div
                style={{ boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)" }}
                className="border border-black w-20 mr-3 h-6 max-w-36 bg-gray-300 text-center"
              >{totalCost.toLocaleString()}</div>
            </div>
          </div>
          <div>
            <button
              style={{ boxShadow: "2px 2px 0px 0px rgba(0,0,0,1)" }}
              className="bg-green-600 py-1 px-4 text-white"
            >
              انتخاب
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
