import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";
import { filterPosts } from "../filters/filtering.mjs";
import { setupSearch } from "../filters/search.mjs";

/**
 * Retrieves posts, sets up search and filters, and renders post templates
 * @async
 * @function readPosts
 */

export async function readPosts() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#posts");
    
    setupSearch(posts);
    filterPosts(posts);
  

    templates.renderPostTemplates(posts, container);
  };