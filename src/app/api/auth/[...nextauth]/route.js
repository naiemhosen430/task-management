import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const hundler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "7101114-55uoocqpg4mi3pe1at1rj46n8br1hide.apps.googleusercontent.com",
      clientSecret: "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",
      redirectUri: "https://tmanaiem.vercel.app/auth/callback/google",
      authorizationUrl: "https://accounts.google.com/o/oauth2/auth",
      requestTokenUrl: "https://accounts.google.com/o/oauth2/token",
    }),
  ],
});

export { hundler as GET, hundler as POST };
