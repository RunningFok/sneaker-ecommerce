import Link from "next/link";

export default function CategoriesBar() {
  return (
    <div className="flex sm:items-center sm:place-content-center bg-neutral-200 text-green-950 overflow-x-auto">
      <div className="my-0.5 sm:my-2 mx-3 sm:mx-4 text-sm sm:text-lg font-semibold">Sneakers</div>
      <div className="my-0.5 sm:my-2 mx-3 sm:mx-4 text-sm sm:text-lg font-semibold">Shoes</div>
      <div className="my-0.5 sm:my-2 mx-3 sm:mx-4 text-sm sm:text-lg font-semibold">Apparel</div>
      <div className="my-0.5 sm:my-2 mx-3 sm:mx-4 text-sm sm:text-lg font-semibold">Handbags</div>
      <div className="my-0.5 sm:my-2 mx-3 sm:mx-4 text-sm sm:text-lg font-semibold">Watches</div>
      <div className="my-0.5 sm:my-2 mx-3 sm:mx-4 text-sm sm:text-lg font-semibold">Accessories</div>
    </div>
  );
}
