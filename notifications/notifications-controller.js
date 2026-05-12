import { notificationBuilder } from "./notification-view.js"


export const notificationController = (notificationsContainer) => {

    const showNotification = (type, message) => {
        const newNotification = document.createElement('div');
        let notificationType = '';
        if(type === 'error') {
            notificationType = 'alert alert-error';
        } else if(type === 'empty') {
            notificationType = 'alert alert-info';
        } else if (type === 'success') {
            notificationType = 'alert alert-success';
        }
        newNotification.className = notificationType;
        newNotification.innerHTML = notificationBuilder(message);
        notificationsContainer.appendChild(newNotification);

        setTimeout(() => {
            newNotification.remove()
        }, 1000);
    }

    return { 
        showNotification
    }
}