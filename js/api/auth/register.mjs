import { API_SOCIAL_URL } from "../constants.mjs"

/**
 * Registers a user profile by sending a POST request to the social API URL with the provided profile data.
 * @returns {Promise<Object>} A promise that resolves to the result of the registration request, in JSON format.
 */

const action = "/auth/register";
const method = "post";

export async function register(profile) {
    const registerURL = API_SOCIAL_URL + action;

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const result = await response.json()
    alert("You are registered!")
    return result
}