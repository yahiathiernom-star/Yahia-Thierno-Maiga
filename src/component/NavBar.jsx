import { NavLink } from 'react-router';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>Hetic</h2>
      <div className={styles.links}>
        <NavLink to="/Home" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
        <NavLink to="/About" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;