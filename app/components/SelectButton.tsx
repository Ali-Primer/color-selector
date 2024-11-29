"use client";

import { useState } from "react";

interface SelectButton {
  buttons: string[];
}

export function SelectButton({ buttons }: SelectButton) {
  const [selected, setSelected] = useState<number>(0);

  function selectOptionHandler(index: number): void {
    setSelected(index);
    console.log(index);
  }
  return (
    <>
      <div
        style={{
          boxShadow: "1px 1px 0px 0px rgba(0,0,0,1)",
        }}
        className="border-2 border-gray-800 flex justify-between text-sm mt-1"
      >
        {buttons.map((button, index) => (
          <button
            onClick={() => selectOptionHandler(index)}
            key={index}
            className={`flex justify-center px-4 py-2 border-l border-black ease-linear transition-colors ${
              selected === index ? "bg-blue-300" : ""
            }`}
          >
            {button}
          </button>
        ))}
      </div>
    </>
  );
}
