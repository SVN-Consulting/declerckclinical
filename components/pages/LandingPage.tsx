import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

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
      <div className='absolute inset-0 bg-background/60 backdrop-blur-[2px]' />
      <div className='relative z-10 flex flex-col items-center justify-center px-6 text-center'>
        <h1 className='text-primary text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl'>
          De Cleck Clinical Consulting
        </h1>
        <p className='mt-4 max-w-2xl text-lg text-foreground/80 sm:text-xl'>
          Independent clinical research associate service
        </p>
        <Button size='lg' className='mt-8'>
          <Link href='/contact'>Contact me</Link>
        </Button>
      </div>
    </section>
  );
};

export default LandingPage;
