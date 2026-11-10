'use client';

import { cn } from '@/lib/utils';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

type PageContextDisplayProps = PropsWithChildren<{
  id?: string;
  title: {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    text: string;
    className?: string;
  };
  blockanimation?: string;
}>;

const PageContextDisplay = ({
  title,
  children,
  id,
  blockanimation,
}: PageContextDisplayProps) => {
  const { tag: Tag } = title;
  const articleRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = articleRef.current;

    if (!element || !blockanimation) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [blockanimation]);

  return (
    <article
      ref={articleRef}
      id={id}
      className={cn(
        'h-screen scroll-mt-24',
        blockanimation && !isVisible && 'opacity-0',
        isVisible && blockanimation,
      )}>
      <Tag
        className={cn(
          'uppercase font-extrabold text-center w-full text-3xl md:text-4xl lg:text-5xl hover:text-primary/80 transition-all pb-4',
          title.className,
        )}>
        {title.text}
      </Tag>
      {children}
    </article>
  );
};

export default PageContextDisplay;
