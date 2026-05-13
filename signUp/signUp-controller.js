import { createUser } from "./signUp-model.js";


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
                await createUser(email, password);
                const userCreatedEvent = new CustomEvent('userCreated', {
                    detail: {
                        message: 'Te has registrado correctamente',
                        type: 'success'
                    }
                })
                signUpContainer.dispatchEvent(userCreatedEvent);
                setTimeout(() => {
                    window.location = '/';
                }, 1500);
            } catch (error) {
                const userNotCreatedEvent = new CustomEvent('userNotCreated', {
                    detail: {
                        message: error.message,
                        type: 'error'
                    }
                })
                signUpContainer.dispatchEvent(userNotCreatedEvent);
            }
        }

    });
}