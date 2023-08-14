import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="pt-12 sm:pt-28 pb-16 px-5 sm:px-10 bg-zinc-800 text-sm">
        <div className="text-base sm:text-3xl font-serif">
          Kick A Good Kick Before You Get Kicked
        </div>
        <div className="hidden sm:flex flow-row mt-20">
          <div className="flex flex-col gap-3 mr-5">
            <Link href={"/search?q=airjordan"}>Air Jordan</Link>
            <Link href={"/search?q=airjordan1"}>Air Jordan 1</Link>
            <Link href={"/search?q=airjordan11"}>Air Jordan 11</Link>
            <Link href={"/search?q=airjordan4"}>Air Jordan 4</Link>
          </div>
          <div className="flex flex-col gap-3 mx-5">
            <Link href={"/search?q=newbalance"}>New Balance</Link>
            <Link href={"/search?q=newbalance327"}>New Balance 327</Link>
            <Link href={"/search?q=newbalance530"}>New Balance 530</Link>
            <Link href={"/search?q=newbalance550"}>New Balance 550</Link>
          </div>
          <div className="flex flex-col gap-3 mx-5">
            <Link href={"/search?q=nike"}>Nike</Link>
            <Link href={"/search?q=nikedunk"}>Nike Dunk</Link>
            <Link href={"/search?q=nikeblazer"}>Nike Blazer</Link>
            <Link href={"/search?q=nikeairforce1"}>Nike Air Force 1</Link>
          </div>
          <div className="flex flex-col gap-3 mx-5">
            <Link href={"/search?q=crocs"}>Crocs</Link>
            <Link href={"/search?q=crocsclog"}>Crocs Clog</Link>
            <Link href={"/search?q=crocssandals"}>Crocs Sandals</Link>
            <Link href={"/search?q=crocsslides"}>Crocs Slides</Link>
          </div>
          <div className="flex flex-col gap-3 mx-5">
            <Link href={"/search?q=adidas"}>Adidas</Link>
            <Link href={"/search?q=adidassuperstar"}>Adidas Superstar</Link>
            <Link href={"/search?q=adidasultraboost"}>Adidas Ultraboost</Link>
            <Link href={"/search?q=adidassamba"}>Adidas Samba</Link>
          </div>
        </div>
        <hr className="my-8 sm:my-16" />
        <div className="flex flex-col sm:flex-row text-xs sm:text-base gap-3 mr-5 place-content-start">
          <h5>ABOUT US</h5>
          <p className="hidden sm:flex">|</p>
          <h5>HELP</h5>
          <p className="hidden sm:flex">|</p>
          <h5>HOW IT WORKS</h5>
          <p className="hidden sm:flex">|</p>
          <h5>PRIVACY</h5> <p className="hidden sm:flex">|</p>
          <h5>TERMS</h5>
          <p className="hidden sm:flex">|</p>
          <h5>CONTACT</h5>
        </div>
        <p className="text-xs font-serif mt-10">
          ©2023 GoodKick. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
