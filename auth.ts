import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      authorize(credentials) {
        if (credentials) {
          return credentials;
        }
      },
    }),
  ],
});
