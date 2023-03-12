import { postTemplate } from "../templates/post.mjs";

/**
 * Sets up search functionality to filter posts based on search terms
 * @function setupSearch
 * @param {Array} 
 * @returns {Promise<void>}
 */


const postsContainer = document.querySelector("#posts");

export function setupSearch(posts) {
  const searchForm = document.querySelector("#search");

  searchForm.addEventListener("submit", (event) => {
    console.log("Submit button clicked!");
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.term.value;
    const term = searchTerm.toLowerCase();

    const filteredPosts = posts.filter((post) => {
      const title = post.title.toLowerCase();
      const body = post.body.toLowerCase();
      const author = post.author.name.toLowerCase();

      const tagsMatch = Boolean(
        post.tags
          .map((tag) => tag.toLowerCase())
          .filter((tag) => tag.includes(term)).length
      );

      return (
        title.includes(term) ||
        body.includes(term) ||
        author.includes(term) ||
        tagsMatch
        
      );
    });

    renderPostSearchTemplate(filteredPosts, postsContainer);
  });
}

function renderPostSearchTemplate(filteredPosts, postsContainer) {
  postsContainer.innerHTML = "";
  postsContainer.append(...filteredPosts.map(postTemplate));
}
