import { Session, User } from 'next-auth';

export type Link = {
  name: string;
  href: string;
  subLinks?: Link[];
};

export type SocialLink = {
  name?: string;
  href: string;
  icon: React.ReactNode;
};

export type SessionAuth = {
  isAuthenticated: boolean;
  user: User | undefined;
  session: Session | null;
};
