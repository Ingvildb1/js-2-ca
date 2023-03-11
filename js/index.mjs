import { setRegisterFormListener } from "./handlers/register.mjs"
import { setLoginFormListener } from "./handlers/login.mjs";

const path = location.pathname;

if (path === '/login.html') {
    setLoginFormListener()
} else if (path === '/register.html') {
    setRegisterFormListener()
}