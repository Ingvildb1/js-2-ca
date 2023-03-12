import { login } from "../api/auth/login.mjs";

/**
 * Sets up an event listener on the login form to submit the form data to the API for authentication.
 */

export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form= event.target;
            const formData = new FormData (form);
            const profile = Object.fromEntries(formData.entries())
          
            // Send it to the API
            login(profile)
        })
      }
    }

