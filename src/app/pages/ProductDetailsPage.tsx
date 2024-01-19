import { useRouter } from 'next/router';

const ProductDetailsPage: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Product ID: {productId}</p>
      {/* Add your product details content here */}
    </div>
  );
};

export default ProductDetailsPage;
