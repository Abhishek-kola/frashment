
import { useEffect, useState } from "react";
import styles from "./NewsLayout.module.css"

function NewsLayout(){
 const [userData, setUserData] = useState([]);
   useEffect(() => {
    getUserData();
  }, []);
  async function getUserData() {
    const url = "https://demo.veyondtech.com/wp-json/wp/v2/categories";
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
  }
  console.log(setUserData);
  return<>
  <div className={styles.category}>
 {
        userData && userData.map((user)=>(
          <h1>{user.name}</h1>
        ))
      }
  </div>
     
  </>

}
export default NewsLayout;