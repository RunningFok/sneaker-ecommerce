import { useState } from "react";

export default function SizeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSize, setIsSize] = useState("");

  const toggleDropMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSize = (chosenSize: string) => {
    setIsSize(chosenSize);
  };

  const dropClass = isOpen ? "flex" : "hidden";

  const sizeList = [
    "US 4",
    "US 5",
    "US 6",
    "US 7",
    "US 8",
    "US 9",
    "US 10",
    "US 11",
    "US12",
    "US13",
  ];

  return (
    <div className="relative text-center font-semibold text-xl mt-5">
      <button className="" onClick={() => toggleDropMenu()}>
        Size
      </button>
      <div
        className={`absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 text-white bg-gradient-to-b from-emerald-700 to-emerald-600 rounded-md ${dropClass}`}
      >
        {sizeList.map((item) => (
          <div
            className="hover:bg-zinc-300 hover:text-zinc-500 text-base px-2 py-1"
            onClick={() => {
              toggleDropMenu(), toggleSize(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
