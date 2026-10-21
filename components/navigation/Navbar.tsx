import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '../ui/separator';

const links = [
  { href: '#home', label: 'Home' },
  { href: '/about', label: 'About me' },
  { href: '/services', label: 'Services' },
  { href: '/therapeutic-expertise', label: 'Therapeutic expertise' },
  { href: '/quality', label: 'Quality and Compliance' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/knowledge-base', label: 'Knowledge base' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 flex h-20 w-full items-center justify-between bg-base-100 px-4 py-2 backdrop-saturate-180 backdrop-blur-xl border-b'>
      <Image
        src='/images/logo-transparent.png'
        alt='Decleck Clinical Logo'
        width={50}
        height={50}
        loading='eager'
      />
      <nav className='flex items-center gap-4 px-3'>
        {/* {links.map((link) => (
          <Button
            key={link.href}
            variant='default'
            className='px-5 rounded-sm hover:underline'>
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))} */}
        <Button>Menu</Button>
        <Separator orientation='vertical' />
        <Button variant='outline' className='border-primary text-primary'>
          Account
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
