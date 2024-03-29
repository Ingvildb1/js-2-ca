import { register } from "../api/auth/register.mjs";

/**
 * Adds an event listener to the register form to handle form submission and registration via API.
 * @function
 * @name setRegisterFormListener
 */

export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form= event.target;
            const formData = new FormData (form);
            const profile = Object.fromEntries(formData.entries())
            
            // Send it to the API
            register(profile)

            // Alert
            alert("You are registered!");

            // Redirect to index.html
        window.location.href = "login.html";
        })
     }
  }

