import React from 'react';

function Header() {
  return (
    <header className='z-10 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit'>
      <div className='w-1/3 flex gap-5 dark:border-zinc-300 boder-2 p-2  justify-center'>
        <h5 className='text-gray-300'>Anywhere</h5>
        <h5 className='text-gray-300'>Any week</h5>
        <h5 className='text-gray-300'>Add gests</h5>
      </div>
    </header>
  );
}

export default Header;
