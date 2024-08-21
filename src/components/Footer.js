import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>About Us</h4>
          <p>Your company description or mission statement goes here.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <p>Email: info@yourstore.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Store. All rights reserved.</p>
      </div>
    </footer>
  );
}
