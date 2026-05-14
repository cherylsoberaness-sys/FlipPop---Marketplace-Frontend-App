import { createUser } from "./signUp-model.js";
import { dispatchEvent } from "../utils/dispatch-event.js";


export const signupController = (signUpContainer) => {


    signUpContainer.addEventListener('submit', async (event) => {
        event.preventDefault();
        let existErrors = false;

        const form = new FormData(signUpContainer);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const passwordConfirm = form.get('password-confirm');

        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        const isEmailValid = emailRegExp.test(email)

        if(!isEmailValid) {
            existErrors = true;
            alert('El email no es valido');
        }

        if(password !== passwordConfirm) {
            existErrors = true;
            alert('Las contraseñas no son iguales');
        }

        if(!existErrors) {
            try {
                dispatchEvent(signUpContainer, 'loadingSignUpStarted');

                await new Promise(resolve => setTimeout(resolve, 1500));

                await createUser(email, password);

                await new Promise(resolve => setTimeout(resolve, 1500));

                dispatchEvent(signUpContainer, 'userCreated', 'Te has registrado correctamente', 'success')
                
                setTimeout(() => {
                    window.location = '/';
                }, 1500);
            } catch (error) {

                dispatchEvent(signUpContainer, 'userNotCreated', error.message, 'error')                
            } finally {
                dispatchEvent(signUpContainer, 'loadingSignUpFinished');
            }
        }

    });
}