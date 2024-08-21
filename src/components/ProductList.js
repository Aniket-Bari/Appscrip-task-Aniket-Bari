import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css';

export default function ProductList({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
