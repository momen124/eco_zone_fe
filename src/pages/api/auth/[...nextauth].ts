import { axiosExternal } from '@/libs/configs/axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: Omit<NextAuthOptions, 'providers'> = {
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24,
  },

  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      let t = token;
      const u = user;

      if (user) {
        t = { ...token, ...u };
      }
      if (trigger === 'update') {
        t = { ...token, ...session };
      }

      return t;
    },
    async session({ session, token }) {
      const s = session;

      if (token && session.user) {
        s.user = { ...session.user, ...token };
      }

      return s;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        type: 'credentials',
        credentials: {
          username: { type: 'email' },
          password: { type: 'password' },
        },

        async authorize(credentials) {
          try {
            const response = await axiosExternal({ req, res }).post(
              '/auth/login',
              {
                username: credentials?.username,
                password: credentials?.password,
              },
            );

            const cookies = response.headers['set-cookie'] ?? [];
            res.setHeader('set-cookie', cookies);

            const user = response.data.data;

            return user;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            const message = error?.response?.data?.message;
            if (message) {
              throw new Error(message);
            }
            return null;
          }
        },
      }),
    ],
    ...authOptions,
  });
}
