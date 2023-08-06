import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "test@test.com",
        },
        password: {
          label: "Password:",
          type: "text",
          placeholder: "123456",
        },
      },
      async authorize(credentials) {
        const user = {
          id: "test",
          name: "Ken",
          email: "test@test.com",
          password: "123456",
        };
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
