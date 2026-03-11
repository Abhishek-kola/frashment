import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to="/">Services</Link>
        <Link to="/work">Work</Link>
        <Link to="/news">News & Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </nav>
    </div>
  );
};
export default Navbar;
