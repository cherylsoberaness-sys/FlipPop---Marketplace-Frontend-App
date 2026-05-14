import { loaderController } from "./loader/loader-controller.js";
import { loginController } from "./login/login-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";
import { signupController } from "./signUp/signUp-controller.js";



const loaderContainer = document.querySelector('.loader-container');
const notificationsContainer = document.querySelector('.notifications-container');
const loginForm = document.querySelector('form');

const { showLoader, hideLoader } = loaderController(loaderContainer);
const { showNotification } = notificationController(notificationsContainer);

loginForm.addEventListener('loadingLoginStarted', showLoader);
loginForm.addEventListener('loadingLoginFinished', hideLoader);

loginForm.addEventListener('loggedinUser', (e) => {
    showNotification(e.detail.type, e.detail.message);
})

loginForm.addEventListener('userNotLoggued', (e) => {
    showNotification(e.detail.type, e.detail.message);
})


loginController(loginForm);