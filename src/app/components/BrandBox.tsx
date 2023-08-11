import Link from "next/link";
import Image from "next/image";

interface BrandBox {
  image: string;
  brandName: string;
  linkURL: string;
}

export default function BrandBox({ image, brandName, linkURL }: BrandBox) {
  return (
    <div className="text-green-950 w-72 p-1">
      <Link href={linkURL}>
        <Image
          src={`/static/images/${image}`}
          alt={brandName}
          width={200}
          height={200}
          className="max-w-[100px] sm:max-w-[220px] sm:w-72 h-16 sm:h-36"
        />
      </Link>
    </div>
  );
}
