/* eslint-disable react/void-dom-elements-no-children */
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
  position: relative;

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

const singleProductBox = css`
  position: absolute;
  top: 80px;
  right: 200px;
  width: 400px;
  color: #571089;
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  letter-spacing: 3px;
  line-height: 2;
`;

const productButton = css`
  position: absolute;
  bottom: 150px;
  right: 270px;
  color: #571089;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
  font-weight: bold;
  width: 200px;
  height: 60px;
  border: #571089 3px solid;
  border-radius: 30px;
  text-align: center;
`;

const priceStyle = css`
  padding: 10px;
`;

const buttonStyle = css`
  padding: 10px;
  cursor: pointer;
  text-align: center;
  text-transform: none;
  border: #571089 3px solid;
  border-radius: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  color: #571089;
  background-color: #fadde1;

  :hover {
    box-shadow: inset 0 0 0 2em #cdb4db;
  }
`;

const backToShopping = css`
  margin-top: 50px;
  padding-left: 200px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  color: #571089;
`;

const inputButton = css`
  position: absolute;
  bottom: -67px;
  right: 65px;
  color: #571089;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
  font-weight: bold;
  width: 60px;
  height: 40px;
  border: #571089 3px solid;
  border-radius: 30px;
  text-align: center;
  background-color: #fadde1;
`;

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
        <div css={backToShopping}>
          <Link href="/shop/">Back to Shopping</Link>
        </div>
        <div css={singleProductBox}>
          <h3>DETAILS</h3>
          <p>{props.product.description}</p>
        </div>
        <div css={productButton}>
          <div css={priceStyle}>{props.product.price} €</div>
          <button css={buttonStyle}>Add To Bag</button>
          <input
            css={inputButton}
            class="quantity"
            min="0"
            name="quantity"
            value="1"
            type="number"
          />
        </div>
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
