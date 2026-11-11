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

export type Service = {
  id: string;
  header: string;
  content: readonly string[];
  createdAt: Date;
  updatedAt: Date;
};

export type ServiceCard = {
  cta?: React.ReactNode;
} & Service;
