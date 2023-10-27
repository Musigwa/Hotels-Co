'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from 'react';

type Room = {
  id: string;
  createdAt: string;
  name: string;
  thumbnail: string;
  price: number;
  imageAlt: string;
};

type Props = {
  limit?: number;
  endpoint?: string;
  setData: (data: any) => void;
};

const baseUrl = 'https://6538c990a543859d1bb1ea90.mockapi.io/api';

const InfiniteList: FC<PropsWithChildren<Props>> = ({ endpoint, limit, children, setData }) => {
  const [fetchedData, setFetchedData] = useState([{}]);
  const fetchRooms = async ({ pageParam }: any) => {
    const res = await fetch(`${baseUrl}/${endpoint}?page=${pageParam}&limit=${limit}`);
    return await res.json();
  };

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
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
    if (data) {
      setFetchedData(prevData => [...prevData, ...data.pages]);
    }
  }, [data]);

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
      {children}
      <div className='w-full text-center m-10'>
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Click to load More'
          : 'No more data to show...'}
      </div>
    </>
  );
};

export default InfiniteList;
