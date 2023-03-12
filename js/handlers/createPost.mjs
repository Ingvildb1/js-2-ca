import { createPost } from '../api/posts/index.mjs';

/**
 * Sets a listener for the "submit" event on the "createPost" form.
 * 
 */

export function setCreatePostFormListener() {
    const form = document.querySelector('#createPost');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());

            let { title, body, tags, media } = post;
            tags = [...tags];
            // Send it to the API
            createPost({ title, body, tags, media });
        });
    }
}
