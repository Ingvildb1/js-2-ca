import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

/**
 * This export function enables a logged in user to retrieve all posts created by other users or themselves from the API by sending a GET request (with token in header).
 * @returns Returns JWT.
 */

export async function getPosts() {
    const updatePostURL = `${API_SOCIAL_URL}${action}?_author=true&_comments=true&_reactions=true`
    
    const response = await authFetch(updatePostURL)

    return await response.json();
}





export async function getPost(id) {
    

    const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true&_comments=true&_reactions=true`;
    
    const response = await authFetch(getPostURL)

    return await response.json();
};


