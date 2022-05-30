/* eslint-disable react/jsx-key */
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { productsDatabase } from '../util/database';

const productStyle = css`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  font-size: 30px;
  font-weight: bold;
`;

export default function Shop(props) {
  return (
    <div css>
      <title>Shop</title>
      <div css={productStyle}>
        {props.products.map((product) => {
          return (
            <div>
              <div key={`product-${product.id}`}>
                <div>
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                  <Image src={`/${product.id}.jpg`} width="300" height="300" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
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
