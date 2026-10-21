import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_NAME, COMPANY_SLOGAN } from '@/lib/constrains';

const LandingPage = () => {
  return (
    <section
      id='home'
      className='relative flex min-h-screen w-full items-center justify-center overflow-hidden'>
      <Image
        src='/images/landingpage.jpg'
        alt=''
        fill
        priority
        sizes='100vw'
        className='object-cover scale-105 blur-sm'
      />
      <div className='relative z-10 flex flex-col items-center justify-center px-6 text-center'>
        <h1 className='animate-fade-in-up text-4xl font-bold tracking-tight text-primary opacity-0 sm:text-5xl md:text-7xl'>
          {COMPANY_NAME}
        </h1>
        <p className='mt-4 max-w-2xl animate-fade-in-up text-lg text-secondary-foreground/80 opacity-0 [animation-delay:200ms] sm:text-xl'>
          {COMPANY_SLOGAN}
        </p>
        <Button
          size='lg'
          className='mt-8 animate-fade-in-up opacity-0 [animation-delay:400ms]'>
          <Link href='/contact'>Contact me</Link>
        </Button>
      </div>
    </section>
  );
};

export default LandingPage;
