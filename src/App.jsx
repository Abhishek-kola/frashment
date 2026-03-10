import "./App.css";
import styles from "./App.module.css";
import Logo from "./component/Logo";
import Navbar from "./component/Navbar";
import ButtonStartProject from "./component/ButtonStartProject";
import { Outlet } from "react-router-dom";

import NewsLayout from "./layout/NewsLayout";

function App() {
 
  
  return (
    <>
      <div className={styles.Navbar}>
        <Logo />
        <Navbar />
        <ButtonStartProject />
      </div>
  
      <Outlet />
      <NewsLayout/>
    </>
  );
}

export default App;
