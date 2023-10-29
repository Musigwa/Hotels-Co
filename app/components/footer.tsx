function Footer() {
  return (
    <footer className='z-10 fixed left-0 bottom-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 p-8 backdrop-blur-2xl dark:from-inherit'>
      <a
        className='text-gray-400 pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
        href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        About us
      </a>
    </footer>
  );
}

export default Footer;
