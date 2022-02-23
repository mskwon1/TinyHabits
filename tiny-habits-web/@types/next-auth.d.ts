import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    accessToken: string;
  }

  interface User {
    id: number;
    name: string;
    email: string;
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}
