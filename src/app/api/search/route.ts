// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import SearchByKeyword from "@/app/helper/SearchByKeyword";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";


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
