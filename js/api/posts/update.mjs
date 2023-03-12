import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

/**
 * Function that updates a post in the API.
 * @param {Object} postData - The data of the post to update.
 * @param {string} postData.id - The id of the post to update.
 * @throws {Error} Will throw an error if no postID is provided in the postData.
 * @returns {Promise<Object>} Returns a Promise that resolves to the updated post data in JSON format.
 */

const action = "/posts";
const method = "put";

export async function updatePost(postData) {
    if (!postData.id) {
        throw new Error("Requires a postID");
    }

    const updatePostURL =  `${API_SOCIAL_URL}${action}/${postData.id}`;


    
    const response = await authFetch(updatePostURL, {
        method,
        body:JSON.stringify(postData)
    });


    return await response.json();
};