'use client';
import { QueryClient, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const baseUrl = 'https://6538c990a543859d1bb1ea90.mockapi.io/api/rooms';
export default function Home() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);

  const getRooms = () => fetch(`${baseUrl}?page=${page}&limit=${limit}`).then(res => res.json());
  const { isPending, error, data = [] } = useQuery({ queryFn: getRooms, queryKey: ['rooms'] });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  return (
    <div className='mb-20 grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:text-left gap-10'>
      {data.map((item: any, idx: number) => {
        const { name, price, imageAlt, thumbnail, id } = item;
        return (
          <Link href={{ pathname: `/rooms`, query: item }} key={idx} className='group'>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-white-800/30 xl:aspect-h-8 xl:aspect-w-7'>
              <Image
                src={thumbnail}
                className='h-full w-full object-cover object-center group-hover:opacity-75'
                alt={imageAlt}
                width={0}
                height={0}
                priority
                layout='responsive'
              />
            </div>
            <h3 className='mt-4 text-sm text-gray-700 dark:text-gray-300'>{name}</h3>
            <p className='mt-1 text-lg font-medium text-gray-900 dark:text-gray-400'>${price}</p>
          </Link>
        );
      })}
    </div>
  );
}
