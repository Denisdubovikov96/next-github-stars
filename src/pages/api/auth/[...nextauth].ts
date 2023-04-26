import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"

const useSecureCookies = (process.env.NEXTAUTH_URL as string).startsWith(
  "https://"
);
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
// let type = "";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID ?? '',
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET ?? "",
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, user, account, profile, session, trigger }) {
      // console.log('jwt',{token,user,account,profile,session,trigger});

      user && (token.user = user);


      return Promise.resolve(token);
    },
    session: async ({ session, token, user, trigger, newSession, }) => {
      // console.log('session',{token,user,session,trigger,newSession});
      //@ts-ignore
      token.user = token.user;
      //@ts-ignore
      session.user = token.user;
      return session;

    },
  },
  // cookies: {
  //   sessionToken: {
  //     name: `${cookiePrefix}next-auth.session-token}`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: false,
  //       path: "/",
  //       secure: useSecureCookies,
  //       domain:
  //         process.env.NODE_ENV === "development" ? "localhost" : "next-github-stars.vercel.app/",
  //     },
  //   },
  // }
}

export default NextAuth(authOptions)