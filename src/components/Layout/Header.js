import styles from './Header.module.scss';
import CartSummary from '../Cart/CartSummary';

const Header = () => {
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li> <h2>Fruity Shop</h2> </li>
          <li>
            <CartSummary />
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;