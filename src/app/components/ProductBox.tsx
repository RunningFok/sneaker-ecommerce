import Link from "next/link";
import Image from "next/image";

interface ProductBoxProps {
  styleID: number | string;
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
    <div key={styleID.toString()} className="text-green-950 w-52 border p-3">
      <Link href={`/${styleID}`}>
        <Image src={thumbnail} alt={shoeName} width={200} height={200} />
      </Link>
      <h5 className="text-sm font-medium line-clamp-2 pt-1">{shoeName}</h5>
      <h5 className="text-xs py-1">Price</h5>
      <h5 className="text-lg font-bold">${retailPrice}</h5>
    </div>
  );
}
