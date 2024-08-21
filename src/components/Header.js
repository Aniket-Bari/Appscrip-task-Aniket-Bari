import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>Your Store</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
