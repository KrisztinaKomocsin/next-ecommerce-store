import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { productsDatabase } from '../util/database';

const productStyle = css`
  width: 100vw;
  min-height: 100vh;
  background-color: #fadde1;

  h1 {
    text-align: center;
    color: #571089;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 30px;
    text-shadow: 5px 5px 4px #df57bc;
  }
`;

const productWrapper = css`
  width: 100%;
  display: flex;
  position: relative;

  ul {
    width: 80%;
    justify-content: space-around;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    display: relative;
    text-align: center;
    list-style: none;
    color: #571089;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
    text-align: center;
    margin-bottom: 1rem;
    padding: 1rem 0;
    text-shadow: 3px 3px 4px #df57bc;
    // box-shadow: 5px 10px #df57bc;
  }
`;

const productImage = css`
  border-radius: 50px;
`;

export default function Shop(props) {
  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta name="description" />
      </Head>

      <section css={productStyle}>
        <h1>Products</h1>
        <div css={productWrapper}>
          <ul>
            {props.products.map((product) => {
              return (
                <li key={`product-${product.id}`}>
                  <div>
                    <Link href={`/products/${product.id}`}>{product.name}</Link>

                    <Image
                      css={productImage}
                      src={`/${product.id}.jpg`}
                      width="250"
                      height="250"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}

// Code in getServerSideProps runs in
// Node.js (on the server)
//
// Important: ONLY in the /pages directory
export function getServerSideProps() {
  return {
    // Anything that you pass in the props
    // object will get passed to the component
    // at the top in the `props` parameter
    props: {
      products: productsDatabase,
    },
  };
}
