import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import cart from '../public/cart.jpg';

const headerStyles = css`
  background-color: #cdb4db;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  > div > a + a {
    color: white;
    text-decoration: none;
    padding: 20px;
  }
`;

const checkoutStyle = css`
  position: absolute;
  right: 100px;
`;

const cartImage = css`
  background: transparent;
  border: none;
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/news">News</Link>
      </div>
      <div css={checkoutStyle}>
        <Link href="/cart">
          <Image
            css={cartImage}
            width="40"
            height="40"
            src={cart}
            alt="shopping cart"
          />
        </Link>
      </div>
    </header>
  );
}
