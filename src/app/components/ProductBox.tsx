import Link from "next/link";
import Image from "next/image";

interface ProductBoxProps {
  styleID: string;
  shoeName: string;
  thumbnail: string;
  retailPrice: number;
}

export default function ProductBox({
  styleID,
  shoeName,
  thumbnail,
  retailPrice,
}: ProductBoxProps) {
  return (
    <div
      key={styleID.toString()}
      className="flex flex-col text-green-950 sm:w-52 border p-1 sm:p-3"
    >
      <Link href={`/${styleID}`}>
        {/* <Image
          src={thumbnail}
          alt={shoeName}
          width={600}
          height={600}
        /> */}
        <img
          src={thumbnail}
          alt={shoeName}
          width={500}
          height={600}
          className="max-w-[100px] sm:max-w-[100%]"
        />
      </Link>
      <h5 className="text-xs sm:text-sm font-medium line-clamp-2 pt-1">
        {shoeName}
      </h5>
      <h5 className="text-xs sm:text-xs py-1">Price</h5>
      <h5 className="text-xs sm:text-lg font-bold">${retailPrice}</h5>
    </div>
  );
}
