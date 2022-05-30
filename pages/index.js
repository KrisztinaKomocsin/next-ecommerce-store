import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import cover from '../public/cover.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Head>

      <main>
        <h1>Home Page</h1>
        <div>
          <Image src={cover} alt="picture of Hello Kitty" />
        </div>
      </main>
    </div>
  );
}
