import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

/**
 * Retrieves posts with additional author, comments and reactions information
 * @returns {Promise<Array>} An array of post objects containing author, comments, reactions information
 */

export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_URL}${action}?_author=true&_comments=true&_reactions=true`;
    
    const response = await authFetch(updatePostURL)

    return await response.json();
}


/**
 * Retrieves a post from the API Social service by its ID, including author, comments and reactions data.
 * @param {number} id The ID of the post to retrieve.
 * @returns {Promise<Object>} A Promise that resolves to the JSON representation of the post.
 */


export async function getPost(id) {
    

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true&_comments=true&_reactions=true`;
    
    const response = await authFetch(getPostURL)

    return await response.json();
};


