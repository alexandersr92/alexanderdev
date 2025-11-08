import Image from 'next/image';
import site from '@/data/site.json';

import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

import { Section } from '@/components/Section';
import { Work } from '@/components/Work';

export const metadata = {
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: site.seo.ogImage }],
  },
};

const formatRange = (start?: string, end?: string) => {
  const fmt = (iso?: string) =>
    iso
      ? new Date(iso + (iso.length === 7 ? '-01' : '')).toLocaleDateString(
          undefined,
          { year: 'numeric', month: 'short' }
        )
      : '';
  const a = fmt(start);
  const b = end === 'present' ? 'Present' : fmt(end);
  return [a, b].filter(Boolean).join(' – ');
};

const yearOfExperience = (startYear?: number) => {
  if (!startYear) return 0;
  const now = new Date();
  const years = now.getFullYear() - startYear;
  return years;
};

export default function Page() {
  const { hero, works, experience, knowledge, contact, footer } = site;

  return (
    <main className='relative'>
      {/* Soft radial background + subtle grid */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent dark:from-blue-500/10' />
        <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] bg-[linear-gradient(to_right,transparent_95%,rgba(0,0,0,0.04)_95%),linear-gradient(to_bottom,transparent_95%,rgba(0,0,0,0.04)_95%)] bg-[size:16px_16px] dark:bg-[linear-gradient(to_right,transparent_95%,rgba(255,255,255,0.06)_95%),linear-gradient(to_bottom,transparent_95%,rgba(255,255,255,0.06)_95%)]' />
      </div>

      {/* HERO */}
      <Section id='hero' className='pt-24'>
        <div className='grid gap-10 md:grid-cols-[1fr,320px] items-center'>
          <div className='[&>*]:transition'>
            <p className='text-sm text-gray-600 dark:text-gray-300/80 motion-safe:animate-[fadeIn_600ms_ease-out]'>
              {hero.greeting}
            </p>
            <h1 className='text-4xl md:text-5xl font-bold mt-2 leading-tight motion-safe:animate-[slideUp_500ms_ease-out]'>
              {hero.title}
            </h1>
            <p className='text-lg md:text-xl opacity-80 mt-3 max-w-2xl motion-safe:animate-[slideUp_700ms_ease-out]'>
              {hero.subtitle}
            </p>

            {/* Highlights */}
            <div className='flex flex-wrap gap-2 mt-5'>
              {hero.highlights?.map((h) => (
                <Badge key={h}>{h}</Badge>
              ))}
            </div>

            <div className='flex gap-3 mt-7'>
              <Button href={hero.ctaPrimary.href}>
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant='ghost'>
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </div>

          <div className='justify-self-end'>
            <div className='relative w-48 h-48 md:w-64 md:h-64'>
              <Image
                src={hero.avatar}
                alt='Alex avatar'
                fill
                sizes='(max-width: 768px) 12rem, 16rem'
                className='rounded-3xl object-cover ring-4 ring-black/5 dark:ring-white/10 shadow-xl hover:scale-[1.02] transition'
                priority
              />
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent' />
            </div>
          </div>
        </div>
      </Section>

      {/* WORKS */}
      <Section id='works'>
        <h2 className='text-2xl md:text-3xl font-semibold'>{works.title}</h2>
        <div className='grid sm:grid-cols-3 gap-6 mt-8'>
          {works.items.map((w, i) => (
            <Work key={w.id ?? `${w.title}-${w.year}-${i}`} work={w} />
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id='experience'
        className='bg-gradient-to-b from-transparent to-black/[0.02] dark:to-white/[0.03] rounded-[2rem]'
      >
        <h2 className='text-2xl md:text-3xl font-semibold'>
          {experience.title}
        </h2>
        <div className='mt-8 grid gap-8'>
          {experience.items.map((job) => (
            <div key={job.company} className='relative pl-6'>
              <div className='absolute left-0 top-2 h-3 w-3 rounded-full bg-black/70 dark:bg-white/70' />
              <h3 className='font-semibold text-lg'>
                {job.position} ·{' '}
                <span className='opacity-80'>{job.company}</span>
              </h3>
              <p className='text-sm opacity-70'>
                {formatRange(job.start, job.end)} · {job.location}
              </p>
              <ul className='mt-3 space-y-1 list-disc pl-5'>
                {job.bullets.map((b) => (
                  <li key={b} className='opacity-90'>
                    {b}
                  </li>
                ))}
              </ul>
              {job.tech?.length ? (
                <div className='flex flex-wrap gap-2 mt-3'>
                  {job.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* KNOWLEDGE */}
      <Section id='knowledge'>
        <h2 className='text-2xl md:text-3xl font-semibold'>
          {knowledge.title}
        </h2>
        <div className='mt-8 grid md:grid-cols-2 gap-8'>
          {knowledge.stacks.map((stack) => (
            <div
              key={stack.category}
              className='rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/60 dark:bg-white/5 backdrop-blur motion-safe:hover:scale-[1.01] transition'
            >
              <h3 className='font-semibold mb-4'>{stack.category}</h3>
              <div className='space-y-4'>
                {stack.skills.map((s) => (
                  <div key={s.name} className='group'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-medium'>{s.name}</span>
                      <span className='text-xs opacity-70'>
                        {yearOfExperience(s.level)} yr
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id='contact' className='pt-8'>
        <h2 className='text-2xl md:text-3xl font-semibold'>{contact.title}</h2>
        <p className='opacity-80 mt-2 max-w-2xl'>{contact.intro}</p>

        <div className='mt-6 flex flex-wrap items-center gap-3'>
          {contact.showMailto && (
            <Button href={`mailto:${contact.email}`}>Email</Button>
          )}
          {contact.socials.map((s) => (
            <Button
              target={'_blank'}
              key={s.name}
              href={s.href}
              variant='ghost'
            >
              {s.name} {'username' in s && s.username ? `· ${s.username}` : ''}
            </Button>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className='px-6 pb-16'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 border-t border-black/10 dark:border-white/10 pt-6'>
          <p className='text-sm opacity-70'>{footer.copyright}</p>
          <p className='text-xs opacity-60'>
            Built with {footer.madeWith.join(' • ')}
          </p>
        </div>
      </footer>
    </main>
  );
}

// Tailwind keyframes (optional): Add these to your globals.css if you want the slide/fade pieces
// @keyframes slideUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
// @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
// .animate-[slideUp_500ms_ease-out] { animation: slideUp 500ms ease-out both }
// .animate-[fadeIn_600ms_ease-out] { animation: fadeIn 600ms ease-out both }
