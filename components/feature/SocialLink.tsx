import { SocialLink as SocialLinkType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type SocialLinkProps = {
  link: SocialLinkType;
};

const SocialLink = ({ link }: SocialLinkProps) => {
  return (
    <Link
      href={link.href}
      className='flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white hover:underline'>
      {link.icon}
      {link.name && <span>{link.name}</span>}
    </Link>
  );
};

export default SocialLink;
