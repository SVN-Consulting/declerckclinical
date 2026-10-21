import { Link } from '@/lib/types';

const links: Link[] = [
  {
    href: '#home',
    name: 'Home',
  },
  {
    href: '#about',
    name: 'About me',
    subLinks: [
      { href: '/about', name: 'About me' },
      { href: '/experience', name: 'Experience' },
    ],
  },
  {
    href: '/services',
    name: 'Services',
    subLinks: [
      { href: '/services', name: 'Services' },
      {
        href: '/therapeutic-expertise',
        name: 'Therapeutic expertise',
      },
    ],
  },
  {
    href: '/quality',
    name: 'Expertise & Resources',
    subLinks: [
      { href: '/quality', name: 'Quality and Compliance' },
      { href: '/partnerships', name: 'Partnerships' },
      { href: '/knowledge-base', name: 'Knowledge base' },
    ],
  },
  {
    href: '/contact',
    name: 'Contact',
  },
];

const legalLinks: Link[] = [
  {
    name: 'Privacy',
    href: '#privacy',
  },
  {
    name: 'GDPR',
    href: '#gdpr',
  },
  {
    name: 'Generale Terms & Conditions',
    href: '#general-terms-and-conditions',
  },
];
export { links, legalLinks };
