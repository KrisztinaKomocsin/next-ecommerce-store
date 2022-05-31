import { css } from '@emotion/react';

const footerStyles = css`
  padding: 10px;
  background-color: #b3dee2;
  height: 100px;
  width: 100vw;
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <p>Copyright Krisztina 20222</p>
    </footer>
  );
}
