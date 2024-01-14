import NextAuth from "next-auth";

import { PrismaClient } from "@prisma/client";
import PrismaAdapter from "@/lib/prisma-adapter";
import { authOption } from "@/app/auth/authOptions";

const prisma = new PrismaClient();

const handler = NextAuth(authOption);

export { handler as GET, handler as POST , handler as PUT, handler as DELETE, handler as PATCH}; 