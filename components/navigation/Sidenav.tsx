import Image from 'next/image';
import NextLink from 'next/link';
import { ChevronDown } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { links } from '@/lib/links';
import { COMPANY_NAME } from '@/lib/constrains';
import { getSession, signIn, signOut } from '@/lib/auth';
import { SignOutButton, SignInButton } from '../feature';

const Sidenav = async () => {
  const { isAuthenticated } = await getSession({});

  return (
    <Sidebar side='left' variant='sidebar' className='lg:hidden'>
      <SidebarHeader className='flex flex-col items-center gap-3 border-b p-4'>
        <Image
          src='/images/logo-transparent.png'
          alt='Logo Scouts Ter Alwina'
          width={40}
          height={40}
          priority
          className='rounded-md object-contain'
        />

        <span className='font-semibold text-primary'>{COMPANY_NAME}</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className='w-full'>
          {links.map((link) => {
            if (!link.subLinks?.length) {
              return (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                    render={<NextLink href={link.href} />}
                    tooltip={link.name}>
                    <span>{link.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            }

            return (
              <Collapsible key={link.href} className='group/collapsible'>
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    render={<SidebarMenuButton tooltip={link.name} />}>
                    <span>{link.name}</span>
                    <ChevronDown className='ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180' />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {link.subLinks.map((subLink) => (
                        <SidebarMenuSubItem key={subLink.href}>
                          <SidebarMenuSubButton
                            render={<NextLink href={subLink.href} />}>
                            <span>{subLink.name}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className='border-t m-2 '>
        {isAuthenticated ? (
          <>
            <SignOutButton className='w-full' />
          </>
        ) : (
          <>
            <SignInButton className='w-full' />
          </>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default Sidenav;
