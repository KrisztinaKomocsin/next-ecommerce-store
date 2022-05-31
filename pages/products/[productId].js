import Image from 'next/image';
import { productsDatabase } from '../../util/database';

export default function Product(props) {
  return (
    <div css={contentWrapper}>
      <div css={contentBox}></div>
        <h1>{props.product.name}</h1>
        <div>
          <div>
            <Image src={`/${props.product.id}.jpg`} width="600" height="600" />
          </div>
        </div>
        <div css={contentDescription}
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
