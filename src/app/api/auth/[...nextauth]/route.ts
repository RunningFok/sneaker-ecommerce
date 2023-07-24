// import { authOptions } from "@/app/lib/auth";
// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     NextResponse.json({ message: "You must be logged in." });
//     return;
//   }

//   return NextResponse.json({
//     authenticated: !!session,
//     session,
//   });
// }

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ],
});

export { handler as GET, handler as POST };
