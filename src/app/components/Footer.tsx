import Link from "next/link";

export default function Footer() {
  return (
    <footer>
        <div className="pt-28 pb-16 px-10 bg-zinc-800 text-sm">
          <div className="text-3xl font-serif">
            Kick A Good Kick Before You Get Kicked
          </div>
          <div className="flex flow-row mt-20">
            <div className="flex flex-col gap-3 mr-5">
              <Link href={"/airjordan"}>Air Jordan</Link>
              <Link href={"/airjordan1"}>Air Jordan 1</Link>
              <Link href={"/airjordan11"}>Air Jordan 11</Link>
              <Link href={"/airjordan4"}>Air Jordan 4</Link>
            </div>
            <div className="flex flex-col gap-3 mx-5">
              <Link href={"/newbalance"}>New Balance</Link>
              <Link href={"/newbalance327"}>New Balance 327</Link>
              <Link href={"/newbalance530"}>New Balance 530</Link>
              <Link href={"/newbalance550"}>New Balance 550</Link>
            </div>
            <div className="flex flex-col gap-3 mx-5">
              <Link href={"/nike"}>Nike</Link>
              <Link href={"/nikedunk"}>Nike Dunk</Link>
              <Link href={"/nikeblazer"}>Nike Blazer</Link>
              <Link href={"/nikeairforce1"}>Nike Air Force 1</Link>
            </div>
            <div className="flex flex-col gap-3 mx-5">
              <Link href={"/crocs"}>Crocs</Link>
              <Link href={"/crocsclog"}>Crocs Clog</Link>
              <Link href={"/crocssandals"}>Crocs Sandals</Link>
              <Link href={"/crocsslides"}>Crocs Slides</Link>
            </div>
            <div className="flex flex-col gap-3 mx-5">
              <Link href={"/adidas"}>Adidas</Link>
              <Link href={"/adidassuperstar"}>Adidas Superstar</Link>
              <Link href={"/adidasultraboost"}>Adidas Ultraboost</Link>
              <Link href={"/adidassamba"}>Adidas Samba</Link>
            </div>
          </div>
          <hr className="my-16" />
          <div className="flex flex-row gap-3 mr-5 place-content-start">
            <h5>ABOUT US</h5>
            <p>|</p>
            <h5>HELP</h5>
            <p>|</p>
            <h5>HOW IT WORKS</h5>
            <p>|</p>
            <h5>PRIVACY</h5> <p>|</p>
            <h5>TERMS</h5>
            <p>|</p>
            <h5>CONTACT</h5>
          </div>
          <p className="text-xs font-serif mt-10">
            ©2023 GoodKick. All Rights Reserved.
          </p>
        </div>
    </footer>
  );
}
