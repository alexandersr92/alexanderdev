export const Section = ({
  id,
  className = '',
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section id={id} className={`px-6 py-16 ${className}`}>
      <div className='max-w-6xl mx-auto'>{children}</div>
    </section>
  );
};
