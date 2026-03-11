// const url = "https://demo.veyondtech.com/wp-json/wp/v2/posts";
const url = "https://demo.veyondtech.com/wp-json/wp/v2/posts?_embed";
const PER_PAGE = 4;

// word press functinality , page, per_page, X-WP-TotalPages

export async function NewsListLoader({ params, request }) {
  const id = params.id;

  // pagination functinality

  let requestUrl = new URL(url);

  if (id) {
    requestUrl.searchParams.set("categories", id);
  }


  const res = await fetch(requestUrl);

  if (!res.ok) {
    const error = new Error("Failed to fetch category posts pagination");
    error.status = res.status;
    error.statusText = res.statusText;
    throw error;
  }


  const posts = await res.json();
  console.log("post", posts)
  return posts;


}
