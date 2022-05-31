import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import cover from '../public/cover.jpg';

const homePageStyle = css`
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
    right: 140px;
    letter-spacing: 3px;
    line-height: 2;
  }
`;
const homePageImage = css`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Head>

      <div css={homePageStyle}>
        <div>
          <h1>HELLO KITTY </h1>
        </div>
        <div>
          <div css={homePageImage}>
            <Image src={cover} alt="Hello Kitty" width="373" height="373" />
            <Image src={cover} alt="Hello Kitty" width="373" height="373" />
          </div>
          <p>
            Hello Kitty was born in the suburbs of London.
            <br /> She lives with her parents and her twin sister Mimmy who is
            her best friend. <br />
            Her hobbies include baking cookies and making new friends.
            <br /> As she always says, "you can never have too many friends!"
            <br /> <br /> <br />
            Hello Kitty has no mouth, as they want people to "project their
            feelings <br /> onto the character" and "be happy or sad together
            with Hello Kitty. <br /> <br />
            <strong>HOW SWEET THIS IS!</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
