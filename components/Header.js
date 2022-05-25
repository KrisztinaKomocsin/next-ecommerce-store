import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  padding: 10px;
  background-color: blueviolet;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <Link href="/">Home</Link>

      <div>
        <Link href="/shop">Shop</Link>
        <Link href="/news">News</Link>
      </div>
    </header>
  );
}
