"use client";

import { useSelector } from "react-redux";
import { SelectButton } from "../../SelectButton";
import { Seller } from "./Seller";
import { RootState } from "@/app/store/store";
import { useEffect, useState } from "react";

interface Sellers {
  id: number;
  name: string;
  distance: number;
  result: number;
  price: number;
}

interface ProductType {
  id: number;
  name: string;
  img: string;
  price: number;
}

export function PopUp() {
  const selected = useSelector((state: RootState) => state.ID.id);
  const isOpen = useSelector((state :RootState) => state.ID.open)
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>()


  async function fetchProduct() {
    try {
      const res = await fetch("/data/products.json")
      if (!res.ok) {
        throw new Error("failed to fetch single product")
      }
      const data:ProductType[] = await res.json()
      const selectedID = data.find((item) => item.id === selected)
      if (selectedID !== null || undefined) {
        setSelectedProduct(selectedID)
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchProduct()
  },[selected])
  
  const sellers: Sellers[] = [
    { id: 0, name: "فروشگاه هشمت", distance: 2, result: 5, price: 20000 },
    { id: 1, name: "فروشگاه نصرت", distance: 2, result: 3, price: 15000 },
    { id: 2, name: "فروشگاه قدرت", distance: 5, result: 1, price: 5000 },
  ];

  return (
    <>
      <div className={`z-20 w-11/12 absolute h-[620px] bg-white top-20 mx-14 border-2 border-gray-700 ${isOpen ? "block" : "hidden"}`}>
        <div className="p-5">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#facc15"
              className="size-6"
            >
              <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
              <path
                fillRule="evenodd"
                d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                clipRule="evenodd"
              />
            </svg>

            <p>از این صفحه می توانید برای محصول ثبت سفارش انجام دهید</p>
          </div>

          <div className="flex mt-5 w-full justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-bold">{selectedProduct?.name}</p>
              <p className="text-blue-400">مشاهده کالاگرام</p>
            </div>
            <div>
              <p className="text-sm">مرتب سازی بر اساس:</p>
              <SelectButton buttons={["نزدیک ترین", "امتیاز عملکرد", "قیمت"]} />
            </div>
          </div>

          {/* subGroups */}
          <div className="text-sm mt-5">
            <p>زیر شاخه محصول:</p>
            <div className="w-fit">
              <SelectButton buttons={["به صرفه", "معمولی", "معطر"]} />
            </div>
          </div>

          {/* sellers */}
          <div className="mt-10 overflow-auto h-80">
            {sellers.map((seller) => (
              <Seller key={seller.id} seller={seller}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
