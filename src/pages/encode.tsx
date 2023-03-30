import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Encode from '../components/Encode';

const EncodePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Encode Base64</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center'>
        <div className='container flex flex-col items-center justify-center gap-12 px-4 py-8'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-7xl'>
            Encode <span className='text-indigo-500'>base64</span>
          </h1>
          <Link className='text-white underline' href='/'>
            Switch to decode
          </Link>
          <Encode />
        </div>
      </main>
    </>
  );
};

export default EncodePage;
