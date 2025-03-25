import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to="/" className={styles.navItem}>Inicio</Link>
        </li>
        <li>
          <Link to="/busqueda" className={styles.navItem}>Búsqueda</Link>
        </li>
        <li>
          <Link to="/lista" className={styles.navItem}>Lista de Pokémon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
