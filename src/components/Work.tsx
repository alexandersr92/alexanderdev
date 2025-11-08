'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from './Badge';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type WorkProps = {
  work: {
    id?: string;
    title: string;
    slug?: string;
    year: number;
    role: string;
    summary: string;
    cover?: string;
    gallery: string[];
    tech: string[];
    links?: {
      live?: string;
      repo?: string;
    };
  };
};

export const Work = ({ work }: WorkProps) => {
  const images = (work.gallery?.length ? work.gallery : work.cover ? [work.cover] : []) ?? [];

  return (
    <div className='group block border  border-black/10 dark:border-white/10 rounded-2xl overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur hover:shadow-xl hover:-translate-y-0.5 transition'>
      {/* Media */}
      <div className='relative aspect-[16/9]'>
        <Swiper modules={[Navigation]} navigation className='mySwiper h-full'>
          {images.map((img, index) => (
            <SwiperSlide key={img ?? index}>
              <div className='relative w-full h-48 sm:h-64 md:h-48 lg:h-64 group-hover:h-80'>
                <Image
                  src={img}
                  alt={`${work.title} screenshot ${index + 1}`}
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover group-hover:scale-[1.02] transition'
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content */}
      <div className='p-4'>
        <div className='flex items-center justify-between gap-3'>
          <h3 className='font-semibold text-lg'>{work.title}</h3>
          <Badge>{work.year}</Badge>
        </div>
        <p className='text-sm opacity-80 mt-1'>{work.summary}</p>

        <div className='flex flex-wrap gap-2 mt-3'>
          {work.tech?.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className='flex gap-4 mt-4 text-sm'>
          {work.links?.live && (
            <Link
              href={work.links.live}
              className='underline underline-offset-4 hover:no-underline'
            >
              Live ↗
            </Link>
          )}
          {work.links?.repo && (
            <Link
              href={work.links.repo}
              className='underline underline-offset-4 hover:no-underline'
            >
              Repo ↗
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
