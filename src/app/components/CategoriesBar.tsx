import Link from "next/link";

export default function CategoriesBar() {
  return (
    <div className="flex items-center place-content-center flex-grow bg-neutral-200 text-green-950">
      <div className=" my-2 mx-4 text-lg font-semibold">Sneakers</div>
      <div className=" my-2 mx-4 text-lg font-semibold">Shoes</div>
      <div className=" my-2 mx-4 text-lg font-semibold">Apparel</div>
      <div className=" my-2 mx-4 text-lg font-semibold">Handbags</div>
      <div className=" my-2 mx-4 text-lg font-semibold">Watches</div>
      <div className=" my-2 mx-4 text-lg font-semibold">Accessories</div>
    </div>
  );
}
