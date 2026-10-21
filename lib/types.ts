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
