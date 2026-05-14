import { buildAuthenticatedSession, buildUnathenticatedSession } from "./session-view.js";
import { getUser } from "./session-model.js";

export const sessionController = async (sessionContainer) => {
    const token = localStorage.getItem('token');

    if(!token) {
        sessionContainer.innerHTML = buildUnathenticatedSession();
        return;
    }
    try {
        const { username }  = await getUser(token)
        sessionContainer.innerHTML = buildAuthenticatedSession(username);
        const logoutButton = document.querySelector('button');
        logoutButton.addEventListener('click', (e) => {
            localStorage.removeItem('token');
            sessionController(sessionContainer);
        })

    } catch(error) {

    }



}