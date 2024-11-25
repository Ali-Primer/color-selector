"use client";

import { useEffect, useState } from "react";
import { Product } from "./Product";

// Unified type definition for products
interface ProductType {
  id: number;
  name: string;
  img: string;
  price: number;
}

// Main Products component
export function Products() {
  const [data, setData] = useState<ProductType[]>([]);

  const fetchProduct = async () => {
    try {
      const res = await fetch("/data/products.json");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data: ProductType[] = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <div className="grid grid-cols-1 gap-4 mt-7 lg:grid-cols-4">
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}