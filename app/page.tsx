'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

type Room = {
  id: string;
  createdAt: string;
  name: string;
  thumbnail: string;
  price: number;
  imageAlt: string;
};

const baseUrl = 'https://6538c990a543859d1bb1ea90.mockapi.io/api/rooms';

export default function Home() {
  const fetchRooms = async ({ pageParam }: any) => {
    const res = await fetch(`${baseUrl}?page=${pageParam}&limit=10`);
    return res.json();
  };

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['rooms'],
      queryFn: fetchRooms,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages, lastPageParam) =>
        lastPage.length === 0 ? undefined : lastPageParam + 1,
      getPreviousPageParam: (firstPage, allPages, firstPageParam) =>
        firstPageParam <= 1 ? undefined : firstPageParam - 1,
    });

  useEffect(() => {
    window.onscroll = () => {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 1;
      if (isBottom && hasNextPage && !isFetching && !isFetchingNextPage) fetchNextPage();
    };
    return () => {
      window.onscroll = null;
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, isFetching]);

  if (isFetching && !isFetchingNextPage) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  if (!data || !data.pages[0]) return 'No data matching your search!';
  return (
    <>
      <div className='mb-20 grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:text-left gap-10'>
        {data?.pages.map((page: Room[], idx: number) =>
          page.map((room: Room, id: number) => (
            <Link href={{ pathname: `/rooms`, query: room }} key={id} className='group'>
              <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-white-800/30 xl:aspect-h-8 xl:aspect-w-7'>
                <Image
                  src={room.thumbnail}
                  alt={room.imageAlt}
                  width={0}
                  height={0}
                  className='h-full w-full object-cover object-center group-hover:opacity-75'
                  layout='responsive'
                />
              </div>
              <h3 className='mt-4 text-sm text-gray-700 dark:text-gray-300'>{room.name}</h3>
              <p className='mt-1 text-lg font-medium text-gray-900 dark:text-gray-400'>
                ${room.price}
              </p>
            </Link>
          ))
        )}
      </div>
      <div className='w-full text-center m-10'>
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Click to load More'
          : 'No more data to show...'}
      </div>
    </>
  );
}
