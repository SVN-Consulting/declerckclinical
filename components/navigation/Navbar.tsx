import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CircleUserRound } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { links } from '@/lib/links';
import Sidenav from './Sidenav';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 flex h-20 w-full items-center justify-between border-b bg-background/70 px-4 py-2 backdrop-blur-xl backdrop-saturate-180'>
      <Image
        src='/images/logo-transparent.png'
        alt='Decleck Clinical Logo'
        width={50}
        height={50}
        loading='eager'
      />
      <NavigationMenu className='mx-0 lg:flex h-full max-w-none flex-1 flex-col items-center hidden'>
        <NavigationMenuList className='flex h-full items-center justify-start gap-1 md:gap-5 text-primary'>
          {links.map((link) => (
            <NavigationMenuItem key={link.href}>
              {link.subLinks?.length ? (
                <>
                  <NavigationMenuTrigger className='gap-2 py-2'>
                    {link.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='grid w-56 gap-1 p-2'>
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.href}>
                          <NavigationMenuLink
                            render={<Link href={subLink.href} />}
                            className='block rounded-md px-3 py-2'>
                            {subLink.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  render={<Link href={link.href} />}
                  className={`${navigationMenuTriggerStyle()} gap-2`}>
                  {link.name}
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className='items-center gap-4 px-3 hidden lg:flex'>
        <Button
          variant='ghost'
          className='hidden border-primary/50 bg-background/60 text-primary backdrop-blur-xl transition-colors hover:bg-primary hover:text-white lg:flex'>
          <span>
            <CircleUserRound />
          </span>
          <p className='hidden xl:block'>Account</p>
        </Button>
      </div>
      <div className='block lg:hidden'>
        <SidebarTrigger />
        <Sidenav links={links} />
      </div>
    </header>
  );
};

export default Navbar;
