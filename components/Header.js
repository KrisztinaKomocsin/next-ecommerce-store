import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  background-color: #bc85a3;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;

  > div > a + a {
    color: white;
    text-decoration: none;
    padding: 20px;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/news">News</Link>
      </div>
      <div>
        <Link href="/cart">Checkout</Link>
      </div>
    </header>
  );
}
