import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { login } from '@api/auth';

const MAX_AGE_IN_SECONDS = 30 * 24 * 60 * 60;

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'email',
      credentials: {
        email: { label: '이메일', type: 'text' },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials, req) {
        // TODO : connect server api
        const { email, password } = credentials;
        const loginResponse = await login({ email, password });

        return loginResponse;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: MAX_AGE_IN_SECONDS,
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
  },
  callbacks: {
    // TODO : implement callback funcs
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user }) {
      return token;
    },
  },
  debug: process.env.APP_ENV === 'local',
});
