import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import nike from '../public/nike.jpg';
import razer from '../public/razer.jpg';

const newsPageStyle = css`
  background-color: #ffc8dd;
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: 50px;
    color: #571089;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    position: absolute;
    top: 0;
    right: 350px;
  }

  p {
    color: #571089;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    position: absolute;
    top: 150px;
    right: 150px;
    letter-spacing: 3px;
    line-height: 2;
  }
`;
const newsPageImage = css`
  display: flex;
  flex-direction: column;
`;

export default function News() {
  return (
    <div>
      <Head>
        <title>News</title>
        <meta name="description" content="News" />
      </Head>

      <div css={newsPageStyle}>
        <div>
          <h1> Hello Kitty collaborations 2022</h1>
        </div>
        <div>
          <div css={newsPageImage}>
            <Image src={razer} alt="Hello Kitty" width="373" height="373" />
            <Image src={nike} alt="Hello Kitty" width="373" height="373" />
          </div>
          <p>
            Razer and Sanrio are taking over a super cute capsule collection
            today that brings Hello Kitty enthusiasts the
            <strong>purr-fect</strong> way to get their favorite aesthetics on
            their PC. . With the tagline “You can never have too many friends”
            the collection not only celebrates the cute characters of Hello
            Kitty but the friends met online when gaming.
          </p>
          <p>
            Sanrio's most popular character, Hello Kitty, is the sole star of
            the show appearing as a floating monogram print across sky blue
            cuffed sweatpants, heavy cotton hoodies, and oversized tees.
          </p>
        </div>
      </div>
    </div>
  );
}
