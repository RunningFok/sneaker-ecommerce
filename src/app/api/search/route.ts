// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import SearchByKeyword from "@/app/helper/SearchByKeyword";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// export async function handler(req: any, res: any) {
//   if (req.method === "GET") {
//     try {
//       const { q: query } = req.query;
//       const sneakerList = await SearchByKeyword({ keyword: query });
//       res.status(200).json(sneakerList);
//     } catch (error) {
//       res.status(500).end();
//     }
//   }
// }

// export async function GET() {
//   return new Response("hi");
// }

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { query } = req.query;
//     console.log(query);
//     // const sneakerList = await SearchByKeyword(query);
//     // console.log("sneakerList")
//     // console.log(sneakerList);
//     // console.log("FETCHED DOCUMENTS");
//     return new Response("hi");
//   } catch (error) {
//     console.log(error);
//     NextResponse.json({ error });
//   }
// }

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = Object.fromEntries(searchParams.entries());
    const queryValue = query["q"];
    const sneakerList = await SearchByKeyword(queryValue);

    return new NextResponse(JSON.stringify(sneakerList), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Error on api/" + error,
      status: 400,
    });
  }
}
