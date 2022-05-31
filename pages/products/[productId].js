/* eslint-disable @upleveled/upleveled/no-unnecessary-interpolations */
import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { productsDatabase } from '../../util/database';

const singlePageStyle = css`
  width: 100vw;
  min-height: 100vh;
  background-color: #fadde1;

  h1 {
    margin-top: 0;
    margin-bottom: 50px;
    font-size: 50px;
    color: #571089;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    text-shadow: 5px 5px 4px #df57bc;
  }
`;

const singleImageBox = css`
  padding-left: 30px;
`;

const singleImage = css`
  border-radius: 50px;
`;

/*const singleProduct = css`
  padding: 0 2rem;
  font-size: 1rem;
  border-left: 3px solid #ffc0cb;
`;*/

export default function Product(props) {
  return (
    <div>
      <Head>
        <title>Product</title>
        <meta name="description" />
      </Head>

      <div css={singlePageStyle}>
        <h1>{props.product.name}</h1>
        <div css={singleImageBox}>
          <Image
            css={singleImage}
            src={`/${props.product.id}.jpg`}
            width="500"
            height="500"
          />
        </div>
        <div>
          <span>{props.product.price} €</span>
        </div>
        <Link href="/shop/">Back to Shopping</Link>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  const foundProduct = productsDatabase.find((product) => {
    return product.id === context.query.productId;
  });

  return {
    props: {
      // productId: context.query.productId,
      product: foundProduct,
    },
  };
}
