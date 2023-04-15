import { login } from "../api/auth/login.mjs";

/**
 * Sets up an event listener on the login form to submit the form data to the API for authentication.
 */

export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const email = document.querySelector("#emailInput").value;
            const password = document.querySelector("#passwordInput").value;
            const profile = { email, password };
            login(profile);
        })
      }
    }


