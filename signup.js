import { notificationController } from "./notifications/notifications-controller.js";
import { signupController } from "./signUp/signUp-controller.js";

const signupForm = document.querySelector('form');
const notificationsContainer = document.querySelector('.notifications-container');

const { showNotification } = notificationController(notificationsContainer);

signupForm.addEventListener('userCreated', (e) => {
    showNotification(e.detail.type, e.detail.message);
});

signupForm.addEventListener('userNotCreated', (e) => {
    showNotification(e.detail.type, e.detail.message);
});


signupController(signupForm);