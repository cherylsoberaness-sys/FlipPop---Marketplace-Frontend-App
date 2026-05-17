import { notificationBuilder } from "./notification-view.js"


export const notificationController = (notificationsContainer) => {

    const showNotification = (type, message) => {
        const newNotification = document.createElement('div');
        newNotification.innerHTML = notificationBuilder(message, type);
        notificationsContainer.appendChild(newNotification);

        setTimeout(() => {
            newNotification.remove()
        }, 1000);
    }

    return { 
        showNotification
    }
}