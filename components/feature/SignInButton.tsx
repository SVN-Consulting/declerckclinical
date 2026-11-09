import { Button } from '@/components/ui/button';
import { CircleUserRound } from 'lucide-react';
import { cn } from '@/lib/utils';
import { signIn } from '@/lib/auth';

type SignInButtonProps = {
  className?: string;
};

const SignInButton = ({ className }: SignInButtonProps) => {
  const handleSignIn = async () => {
    'use server';
    await signIn();
  };
  return (
    <form action={handleSignIn}>
      <Button
        variant='ghost'
        type='submit'
        className={cn(
          'border-primary/50 bg-background/60 text-primary backdrop-blur-xl transition-colors hover:bg-primary hover:text-white',
          className,
        )}>
        <span>
          <CircleUserRound />
        </span>
        <p>Account</p>
      </Button>
    </form>
  );
};

export default SignInButton;
