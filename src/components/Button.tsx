import Link from 'next/link';

export const Button = ({
  href,
  children,
  variant = 'primary',
  target = '_self',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  target?: '_self' | '_blank';
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={
        variant === 'primary'
          ? 'inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold shadow-sm border border-black/10 dark:border-white/10 bg-black text-white dark:bg-white dark:text-black hover:translate-y-[-1px] active:translate-y-0 transition'
          : 'inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold shadow-sm border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:bg-white/90 dark:hover:bg-white/10 backdrop-blur transition'
      }
    >
      {children}
    </Link>
  );
};
