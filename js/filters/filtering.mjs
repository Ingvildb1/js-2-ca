import { postTemplate } from "../templates/post.mjs";

const postsContainer = document.querySelector("#posts");
const select = document.querySelector("#filterList");


/**
 * Filters an array of posts based on the selected filter value
 * @param {Array} posts - An array of post objects
 * @return {Array} An array of post objects filtered by the selected filter value
 */

export function filterPosts(posts) {
    select.addEventListener("change", () => {
      const filterValue = select.value;
  
      const postsFilteredByDate = posts.filter((post) => {
        if (post.created.includes(filterValue)) {
          return post;
        } else if (filterValue === "media") {
          return post.media;
        } else if (
          post.title.includes(filterValue) ||
          post.body.includes(filterValue) ||
          post.tags.includes(filterValue)
        ) {
          return post;
        } else if (filterValue === "likes") {
          return post._count.reactions > 0;
        } else if (filterValue === "comments") {
          return post._count.comments > 0;
        }
      });

/**
 * Renders a filtered list of posts into a given container using a specified template
 * @param {Array} postsFilteredByDate - An array of post objects filtered by date
 * @param {HTMLElement} postsContainer - The container element where the posts will be rendered
 */

      function renderPostFilterTemplate(postsFilteredByDate, postsContainer) {
        postsContainer.innerHTML = "";
  
        postsContainer.append(...postsFilteredByDate.map(postTemplate));
      }
  
      renderPostFilterTemplate(postsFilteredByDate, postsContainer);
    });
  }