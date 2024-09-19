import NextAuth from "next-auth";
import GoggleProvider from "next-auth/providers/facebook";

export const authOptions = {
  // Configure one or more authentication providers
providers: [
  FacebookProvider({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.uid = token.sub;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
