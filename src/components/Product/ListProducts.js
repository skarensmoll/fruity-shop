import ProductCard from './ProductCard';

const ListProducts = ({ products, onAddQuantity }) => {
  const productIds = Object.keys(products);

  return productIds.map(id => {
      const product = products[id];
      return (
        <ProductCard
          key={id}
          id={id}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          onAdd={(productId, quantity) => {
            onAddQuantity(productId, quantity);
          }}
        />
      )
    });

};

export default ListProducts;