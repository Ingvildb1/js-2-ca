
import { getPosts } from "../api/posts/read.mjs";
import { renderPostTemplates } from "../templates/post.mjs";

/**
 *
 */

export async function setupSearch() {
  const posts = await getPosts();

  const form = document.querySelector("#search");
  const formInput = document.querySelector("#searchInput");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchValue = formInput.value.trim();

      const filteredSearch = posts.filter((post) => {
        if (!post.title || !post.body) {
          return false;
        }
        return post.title.toLowerCase().includes(searchValue) || post.body.toLowerCase().includes(searchValue);
      });

      const container = document.querySelector("#posts");
      container.innerHTML = "";
      renderPostTemplates(filteredSearch, container);
    });
  }
}