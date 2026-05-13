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

    } catch(error) {

    }



}