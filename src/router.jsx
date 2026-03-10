import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NewsBlogs from "./component/NewsBlogs";
import Services from "./component/Services";
import Work from "./component/Work";
import About from "./component/About";
import Career from "./component/Career";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <NewsBlogs /> },
      { path: "/services", element: <Services /> },
      { path: "/work", element: <Work /> },
      { path: "/about", element: <About /> },
      { path: "/career", element: <Career /> },
    ],
  },
]);

export default router;
