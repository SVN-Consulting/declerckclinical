import NextAuth from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';
import { redirect } from 'next/navigation';
import { SessionAuth } from './types';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Keycloak({
      clientId: process.env.AUTH_KEYCLOAK_ID!,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET!,
      issuer: process.env.AUTH_KEYCLOAK_ISSUER!,
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }

      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken as string,
      };
    },
  },
});

export const getSession = async ({
  redirectUrl,
}: {
  redirectUrl?: string;
}): Promise<SessionAuth> => {
  const session = await auth();

  if (!session) {
    if (redirectUrl) {
      redirect(redirectUrl);
    }
  }

  return {
    isAuthenticated: !!session,
    user: session?.user,
    session: session,
  };
};
