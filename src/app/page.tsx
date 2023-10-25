import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* Header component */}
      <div className='z-10 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit'>
        <p>
          Get started by editing&nbsp;
          <code className='font-mono font-bold'>src/app/page.tsx</code>
        </p>
      </div>

      {/* The body component / children wrapper */}
      <div className='mb-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-5'>
        {Array.from({ length: 25 }, (itm, idx) => {
          return (
            <a
              key={idx}
              href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{' '}
                <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </a>
          );
        })}
      </div>

      {/* The footer component*/}
      <div className='z-10 fixed left-0 bottom-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 p-8 backdrop-blur-2xl dark:from-inherit'>
        <a
          className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          By{' '}
          <Image
            src='/vercel.svg'
            alt='Vercel Logo'
            className='dark:invert'
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </main>
  );
}
