//import { setRegisterFormListener } from "./handlers/register.mjs"
//import { setLoginFormListener } from "./handlers/login.mjs";
import * as listeners from "./handlers/index.mjs";
import * as post from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
//import { readPosts } from "./handlers/index.mjs";

/**
 * The router function routes incoming requests to the appropriate listeners based on the current path.
 */

export default function router () {
    const path = location.pathname;

    switch (path) {
        case '/login.html':
            listeners.setLoginFormListener()
            break;    
        case '/register.html':
            listeners.setRegisterFormListener()
            break;
        case '/create.html':
             listeners.setCreatePostFormListener()
            break;
        case '/edit.html':
             listeners.setUpdatePostListener()
             break;
         case '/posts.html':
            listeners.readPosts()
            break;
         case '/post.html':
            listeners.readPost()
            break;
        
    }
}



