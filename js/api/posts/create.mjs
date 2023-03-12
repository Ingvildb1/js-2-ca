import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

/**
 * Sends a request to create a new post using the provided post data.
 * @param {Object} postData - An object containing the data for the post to be created.
 *@returns {Promise} A promise that resolves to an object representing the created post.
 */

const action = "/posts";
const method = "post";

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;
    
    const response = await authFetch(createPostURL, {
        method,
        body:JSON.stringify(postData)
    })

    return await response.json();
};