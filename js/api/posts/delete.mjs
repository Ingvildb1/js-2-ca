import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Removes a post from the API
 * @param {number} id - The ID of the post to be deleted
 * @throws {Error} Will throw an error if no post ID is provided
 * @returns {Promise} Returns a promise that resolves with the JSON response from the API
 */

const action = "/posts";
const method = "delete";

export async function removePost(id) {
    if (!id) {
        throw new Error("Delete requires a postID");
    }

    const updatePostURL =  `${API_SOCIAL_URL}${action}/${id}`;
    
    const response = await authFetch(updatePostURL, {
        method,
    })

    return await response.json();
};