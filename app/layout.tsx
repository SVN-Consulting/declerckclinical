import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter, Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Footer, Navbar } from '@/components/navigation';
import { TooltipProvider } from '@/components/ui/tooltip';
import { SidebarProvider } from '@/components/ui/sidebar';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'De Clerk Clinical Consulting',
  description: 'Website for De Cleck Clinical Consulting',
  keywords:
    'De Cleck Clinical Consulting, De Cleck Clinical, De Cleck, De Cleck Consulting, De Cleck Consulting, De Cleck, De Cleck Clinical, De Cleck Clinical Consulting, Consulting, Clinical',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        roboto.variable,
      )}>
      <body className='min-h-full flex flex-col antialiased'>
        <TooltipProvider>
          <SidebarProvider defaultOpen={false}>
            <main className='w-full grown'>
              <Navbar />
              {children}
            </main>
          </SidebarProvider>
        </TooltipProvider>
        <Footer />
      </body>
    </html>
  );
}
