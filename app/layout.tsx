import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReactQueryProvider from './containers/ReactQueryProvider';
import Footer from './components/footer';
import Header from './components/header';
import './style/globals.css';
import { FC, PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hotels&Co',
  description: "Find and book your tonight's hostel with ease and unmatched Comfort.",
};

const RootLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <html lang='en' data-theme='forest'>
        <body className={inter.className}>
          <main className='flex min-h-screen flex-col items-center justify-between p-24 px-10'>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ReactQueryProvider>
  );
};

export default RootLayout;
