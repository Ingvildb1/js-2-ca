import { setRegisterFormListener } from "./handlers/register.mjs"
import { setLoginFormListener } from "./handlers/login.mjs";
import * as listeners from "./handlers/index.mjs";
import * as post from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";


const path = location.pathname;



if (path === '/login.html') {
    listeners.setLoginFormListener()
} else if (path === '/register.html') {
    listeners.setRegisterFormListener()
} else if (path === '/create.html') {
    listeners.setCreatePostFormListener()
} else if (path === '/edit.html') {
    listeners.setUpdatePostListener()
}


async function testTemplate() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#posts");
    templates.renderPostTemplates(posts, container);
}

testTemplate();



