export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className='inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-200/90 backdrop-blur-sm bg-white/70 dark:bg-white/10 border-black/10 dark:border-white/10'>
    {children}
  </span>
);
