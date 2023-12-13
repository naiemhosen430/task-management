// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const hundler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "796637101114-55uoocqpg4mi3pe1at1rj46n8br1hide.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});

export { hundler as GET, hundler as POST };
