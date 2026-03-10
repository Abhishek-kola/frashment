import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/services">Services</Link>
        <Link to="/work">Work</Link>
        <Link to="/">News & Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </nav>
    </div>
  );
};
export default Navbar;
