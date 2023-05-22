import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
    ],
    pages: {
        signIn: "/signin",
    },
    session: {
        strategy: "database",
    },
    debug: true,
    adapter: PrismaAdapter(prisma),
    callbacks: {
        session: async ({ session, user }) => {
            session.user = user;
            console.log("session callback => " + session.user.email);
            return Promise.resolve(session)
        },
        async signIn({ user, account, profile, email, credentials }) {
            console.log("signIn callback => " + user.id);
            return true;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            console.log("jwt callback => " + token);
            return token
        }
    },
    events: {
        async signIn(message) { console.log("signIn event => " + message); },
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
