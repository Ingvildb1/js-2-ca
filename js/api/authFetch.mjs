import { load } from "../storage/index.mjs";

/**
 * This export function is getting the freshest value for the token and returns the correct header thats used for API requests.
 * @returns Returns header.
 */

export function headers() {
    const token = load("token");
  
    return {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    };
}

/**
 * This export function returns fetch and setting the headers.
 * @param {string} url API method URL
 * @param {object} options Optional parameter for modifying request.
 * @returns Returns fetch.
 */

export async function authFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    });
}