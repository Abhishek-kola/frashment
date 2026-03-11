import { useEffect, useState } from "react";
import styles from "./NewsLayout.module.css";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Spinner from "../component/Spinner";

function NewsLayout() {

  const [userData, setUserData] = useState([]);
  // const navigation = useNavigation();

  useEffect(() => {
    async function getUserData() {
      const url = "https://demo.veyondtech.com/wp-json/wp/v2/categories";
      let response = await fetch(url);
      response = await response.json();
      setUserData(response);
    }
    getUserData();
  }, []);



  return (
    <>
      <div className={styles.category}>
        <h1>
          <NavLink to="/news">All</NavLink>
        </h1>

        {userData.map((user) => (
          <h1 key={user.id}>
            <NavLink to={`/news/${user.id}`}>
              {user.name}
            </NavLink>
          </h1>
        ))}
      </div>

      {/* Posts page */}
      <Outlet />
    </>
  );
}

export default NewsLayout;