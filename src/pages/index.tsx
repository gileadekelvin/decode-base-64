import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Decode from '../components/Decode';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Decode Base64</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center'>
        <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-[5rem]'>
            Decode <span className='text-indigo-500'>base64</span>
          </h1>
          <Link className='text-white' href='/encode'>
            Switch to encode
          </Link>
          <Decode />
        </div>
      </main>
    </>
  );
};

export default Home;
