import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * Logs in the user with the provided profile information
 */

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = API_SOCIAL_URL + action;

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
    })

    const { accessToken, ...user } = await response.json();
    
    storage.save("token", accessToken);

    storage.save("profile", user);

    alert("You are logged in!");
}