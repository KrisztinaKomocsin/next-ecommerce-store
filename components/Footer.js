import { css } from '@emotion/react';

const footerStyles = css`
  padding: 10px;
  background-color: #f1dfd3;
  height: 80px;
`;

export default function Footer() {
  return <footer css={footerStyles}>Copyright 2022</footer>;
}
