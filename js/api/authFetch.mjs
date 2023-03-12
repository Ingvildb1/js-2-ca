import { load } from "../storage/index.mjs";

/**
 * This function returns an object containing the necessary headers for API requests, including the bearer token retrieved from local storage.
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