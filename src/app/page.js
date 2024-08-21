import Head from 'next/head';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  console.log('Fetched products:', products); // Debugging line

  return (
    <div className={styles.container}>
      <Head>
        <title>Your Store</title>
        <meta name="description" content="Buy the best products from Your Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Welcome to Your Store</h1>
        <ProductList products={products} />
      </main>

      <Footer />
    </div>
  );
}
