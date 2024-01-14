import NextAuth from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const authOption = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
      
      //@ts-ignore
      profile(profile: GithubProfile) {
        return {
          id: profile.id,
          name: profile.name!,
          email: profile.email!,
          avatar_url: profile.avatar_url,
          
        }
      }
    }),
   
  ],
  callbacks: {
    async session({ session, user }) {
      return {
        ...session,
        user,
      };
    },
  },
  

};
//@ts-ignore
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
