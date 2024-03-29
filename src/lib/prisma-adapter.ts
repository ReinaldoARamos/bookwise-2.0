import { Adapter } from "next-auth/adapters";
import { prisma } from "./prisma";

export default function PrismaAdapter(): Adapter {
  return {
    async createUser(user) {
      
      const prismaUser = await prisma.user.create({
       
        data: {
          name: user.name,
          avatar_url: user.avatar_url,
            email: user.email

        },
      });

  

      return {
        id: prismaUser?.id,
        name: prismaUser.name,
        avatar_url: prismaUser?.avatar_url!,
        email: prismaUser.email!,
        emailVerified: null,
      };
    },
    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        return null;
      }

      return {
        id: user?.id,
        name: user.name,
        avatar_url: user?.avatar_url!,
        email: user.email!,
        emailVerified: null,
      };
    },
    
    async getUserByEmail(id) {
      const user = await prisma.user.findUnique({
        where: {
          
         id
        },
      });

      if (!user) {
        return null;
      }
      return {
        id: user?.id,
        name: user.name,
        avatar_url: user?.avatar_url!,
        email: user.email!,
       
        emailVerified: null,
      };
    },
    
    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: {
          user: true,
        },
      });

      if (!account) {
        return null;
      }

      const { user } = account;

      return {
        id: user?.id,
        name: user.name,
        avatar_url: user?.avatar_url!,
        email: user.email!,
        emailVerified: null,
      };
    },
    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url,
        },
      });
      return {
        id: prismaUser?.id,
        name: prismaUser.name,
        avatar_url: prismaUser?.avatar_url!,
        email: prismaUser.email!,
        emailVerified: null,
      };
    },

    async linkAccount(account) {
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
          provider_account_id: account.providerAccountId,
        },
      });
    },
    async unlinkAccount({ providerAccountId, provider }) {},
    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          user_id: userId,
          expires,
          session_token: sessionToken,
        },
      });

      return {
        userId,
        sessionToken,
        expires,
      };
    },
    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      });

      if (!prismaSession) {
        return null;
      }

      const { user, ...session } = prismaSession;
      return {
        session: {
          expires: session.expires,
          userId: sessionToken,
          sessionToken: session.session_token,
        },
        user: {
          id: user?.id,
          name: user.name,
          avatar_url: user?.avatar_url!,
          email: user.email!,
          emailVerified: null,
        },
      };
    },

    async updateSession({ sessionToken, userId, expires }) {
      const PrismaSession = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          expires: expires,
          user_id: userId,
        },
      });
      return {
        sessionToken: PrismaSession.session_token,
        userId: PrismaSession.user_id,
        expires: PrismaSession.expires,
      };
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      });
    },
  };
}