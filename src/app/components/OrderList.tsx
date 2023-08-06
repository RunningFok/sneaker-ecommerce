import moment from "moment";
import Image from "next/image";

interface OrderListProps {
  id: string;
  timestamp: number;
  images: string[];
  amount: number;
}

export default function OrderList({
  id,
  timestamp,
  images,
  amount,
}: OrderListProps) {
  return (
    <div
      key={id.toString()}
      className="text-green-950 border relative rounded-md p-3"
    >
      <div className="items-start p-5 text-sm">
        <h5 className="font-bold text-lg">ORDER PLACED</h5>
        <h5 className="text-sm font-bold"><span className="text-base pr-2">Total:</span>${amount}</h5>
        <h5 className="text-sm font-bold"><span className="text-base pr-2">Date:</span>{moment.unix(timestamp).format("DD MMMM YY")}</h5>
      </div>
      <div className="flex flex-row">
        {images.map((image) => (
          <Image
            src={image}
            alt={image}
            width={200}
            height={200}
            className="h-20 object-contain sm:h-32"
          />
        ))}
      </div>
    </div>
  );
}
