import styles from '../styles/Filters.module.css'; // Import the CSS module

export default function Filters() {
  return (
    <div className={styles.filters}>
      <h2>Filters</h2>
      <form>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="range" id="price" name="price" min="0" max="1000" />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select id="rating" name="rating">
            <option value="all">All</option>
            <option value="1">1 Star & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="4">4 Stars & Up</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        {/* Add more filters as needed */}
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
}
