import BrandBox from "./BrandBox";

export default function PopularBrands() {
  return (
    <div className="px-5">
      <div className="flex text-green-950">
        <h1 className="text-xl font-semibold">Popular Brands</h1>
      </div>
      <div className="flex flex-row py-3 gap-5 place-content-evenly">
        <BrandBox
          brandName="Jordan"
          image="jordan-logo.png"
          linkURL="/jordan"
        />
        <BrandBox
          brandName="Nike"
          image="nike-logo-black.png"
          linkURL="/nike"
        />
        <BrandBox
          brandName="Adidas"
          image="adidas-logo-2.png"
          linkURL="/adidas"
        />
        <BrandBox brandName="Crocs" image="crocs-logo.png" linkURL="/crocs" />
        <BrandBox
          brandName="New Balance"
          image="newbalance-logo.png"
          linkURL="/newbalance"
        />
      </div>
    </div>
  );
}