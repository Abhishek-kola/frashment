import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NewsBlogs, { NewsList } from "./component/NewsBlogs";
import Services from "./component/Services";
import Work from "./component/Work";
import About from "./component/About";
import Career from "./component/Career";
import ErrorPage from "./ErrorPage";
import { NewsListLoader } from "./loaders/NewsListLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Services /> },

      {
        path: "/news",
        element: <NewsBlogs />,
        children: [
          {
            index: true, // 👈 IMPORTANT
            loader: NewsListLoader,
            element: <NewsList />,
          },
          {
            path: ":id",
            loader: NewsListLoader,
            element: <NewsList />,
          },
        ],
      },

      { path: "/work", element: <Work /> },
      { path: "/about", element: <About /> },
      { path: "/career", element: <Career /> },
    ],
  },
]);

export default router;