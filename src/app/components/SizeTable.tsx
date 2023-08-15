import { useState } from "react";

export default function SizeTable() {
  const [isSize, setIsSize] = useState("");
  const toggleSize = (chosenSize: string) => {
    setIsSize(chosenSize);
  };
  const sizeList = [
    "US 4",
    "US 5",
    "US 6",
    "US 7",
    "US 8",
    "US 9",
    "US 10",
    "US 11",
    "US 12",
    "US 13",
  ];
  return (
    <div className="text-center text-green-950 text-xs sm:text-sm mt-5">
      <div className="grid grid-cols-4">
        {sizeList.map((item) => (
          <div className="border px-5 py-3 hover:font-semibold cursor-pointer">{item}</div>
        ))}
      </div>
    </div>
  );
}
