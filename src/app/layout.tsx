'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './components/footer';
import Header from './components/header';
import './style/globals.css';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

// export const metadata: Metadata = {
//   title: 'Hotels&Co',
//   description: 'Created by Musigwa Pacifique',
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang='en'>
        <body className={inter.className}>
          <main className='flex min-h-screen flex-col items-center justify-between p-24 px-10'>
            <Header />
            {/* <Head /> */}
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </QueryClientProvider>
  );
};

export default RootLayout;
