import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signOut } from '@/lib/auth';
import { SIGN_OUT_REDIRECT_URL } from '@/lib/constrains';

type SignOutButtonProps = {
  className?: string;
};

const SignOutButton = ({ className }: SignOutButtonProps) => {
  const handleSignOut = async () => {
    'use server';
    await signOut({
      redirectTo: SIGN_OUT_REDIRECT_URL,
    });
  };

  return (
    <form action={handleSignOut}>
      <Button
        variant='ghost'
        type='submit'
        className={cn(
          ' border-primary/50 bg-background/60 text-primary backdrop-blur-xl transition-colors hover:bg-primary hover:text-white ',
          className,
        )}>
        <LogOut />
      </Button>
    </form>
  );
};

export default SignOutButton;
