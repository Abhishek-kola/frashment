import { Outlet, useNavigation, useLoaderData, NavLink } from "react-router-dom";
import NewsLayout from "../layout/NewsLayout";
import Spinner from "./Spinner";


const NewsBlogs = () => {

  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <h1>News and Blogs</h1>

      <NewsLayout />

      <Outlet />
    </>
  );
};

export default NewsBlogs;
export function NewsList() {
  const posts = useLoaderData();

  return (
    <section>
      <div className="article-list">
        {posts.map((article) => (
          <ArticleCard key={article.id} data={article} />
        ))}
      </div>
    </section>
  );
}

function ArticleCard({ data }) {

  const image =
    data._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/400x250";

  return (
    <NavLink to={`/post/${data.id}`}>
      <div className="article-card">
        <div className="article-img">
          <img
            style={{ borderRadius: "7px" }}
            src={image}
            alt="news"
          />
        </div>

        <div className="article-info">
          <div className="article-categories">
            {data._embedded?.["wp:term"]?.[0]?.map((category) => (
              <span key={category.id} className="article-badge">
                {category.name}
              </span>
            ))}
          </div>

          <h3
            className="article-title"
            dangerouslySetInnerHTML={{
              __html: data.title.rendered,
            }}
          />
        </div>
      </div>
    </NavLink>
  );
}