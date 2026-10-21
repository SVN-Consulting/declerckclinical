import {
  COMPANY_NAME,
  BUILD_YEAR,
  COMPANY_SLOGAN,
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from '@/lib/constrains';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { links, legalLinks } from '@/lib/links';
import Link from 'next/link';
import { SocialLink } from '../feature';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full shrink-0 border-t border-primary/20 bg-primary'>
      <section className='mx-auto grid w-full max-w-7xl grid-cols-1 divide-y divide-white/20 gap-0 px-6 py-10 md:grid-cols-3 md:divide-y-0 md:gap-8 lg:px-8'>
        <div className='flex flex-col items-center gap-3 py-8 first:pt-0 md:items-start md:py-0'>
          <Link href='#home' aria-label={`${COMPANY_NAME} home`}>
            <Image
              src='/images/logo-transparent.png'
              alt={`${COMPANY_NAME} Logo`}
              width={160}
              height={80}
              className='h-auto w-32 object-contain'
            />
          </Link>
          <p className='max-w-xs text-center text-sm text-white/80 md:text-left'>
            {COMPANY_SLOGAN}
          </p>
          <div className='h-0.5 w-10 rounded-full bg-white/20' />
          <SocialLink
            link={{
              href: '#linkedin',
              icon: <FaLinkedin className='h-5 w-5' />,
            }}
          />
        </div>
        <nav
          aria-label='Footer navigation'
          className='flex flex-col items-center gap-3 py-8 md:py-0'>
          <h3 className='mb-1 text-sm font-bold uppercase tracking-wider text-white'>
            Navigation
          </h3>
          <ul className='flex flex-col items-center gap-2'>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className='text-sm text-white/80 transition-colors hover:text-white hover:underline'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex flex-col items-center gap-6 py-8 last:pb-0 md:items-end md:py-0'>
          <div className='flex flex-col items-center gap-3 md:items-start'>
            <h3 className='text-sm font-bold uppercase tracking-wider text-white'>
              Contact information
            </h3>
            <SocialLink
              link={{
                href: `tel:${COMPANY_PHONE}`,
                icon: <Phone className='h-4 w-4 shrink-0' />,
                name: `${COMPANY_PHONE}`,
              }}
            />
            <SocialLink
              link={{
                href: `mailto:${COMPANY_EMAIL}`,
                icon: <Mail className='h-4 w-4 shrink-0' />,
                name: `${COMPANY_EMAIL}`,
              }}
            />
          </div>
          <div className='flex flex-col items-center gap-3 md:items-start'>
            <h3 className='text-sm font-bold uppercase tracking-wider text-white'>
              Legal
            </h3>
            <ul className='flex flex-col items-center gap-2 md:items-start'>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-white/80 transition-colors hover:text-white hover:underline'>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-white/20 px-6 py-4 text-center text-xs text-white/70 sm:flex-row sm:text-left lg:px-8'>
        <p>
          © {BUILD_YEAR} {COMPANY_NAME}. All rights reserved.
        </p>
        <p>
          Made by{' '}
          <a
            href='https://svnconsulting.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white transition-colors hover:underline'>
            SVN Consulting
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
