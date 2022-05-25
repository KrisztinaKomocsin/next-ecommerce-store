import { css, Global } from '@emotion/react';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
              Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
              Helvetica Neue, sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// Layout wraps all pages
// The Component component refers to the current page
// that is being rendered
