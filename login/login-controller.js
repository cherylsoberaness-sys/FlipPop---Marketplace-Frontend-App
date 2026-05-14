import { dispatchEvent } from "../utils/dispatch-event.js";
import { loginUser } from "./login-model.js";

export const loginController = async (loginContainer) => {

    loginContainer.addEventListener('submit', async (event) => {
        event.preventDefault();

        const form = new FormData(loginContainer);
        const email = form.get('email');
        const password = form.get('password');

        try {
            dispatchEvent(loginContainer, 'loadingLoginStarted');

            await new Promise(resolve => setTimeout(resolve, 500));

            const token = await loginUser(email, password);
            localStorage.setItem('token', token);

            await new Promise(resolve => setTimeout(resolve, 500));

            dispatchEvent(loginContainer, 'loggedinUser', 'Te has logueado correctamente', 'success')

            
            setTimeout(() => {
                    window.location = '/';
            }, 1000);
            
        } catch (error) {

            dispatchEvent(loginContainer, 'userNotLoggued', error.message, 'error');
        } finally {
            dispatchEvent(loginContainer, 'loadingLoginFinished');
        }
    });

} 