
import { loaderController } from "./loader/loader-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";
import { productsListController } from "./products-list/products-list-controller.js";

const productsContainer = document.querySelector('.products-container');
const loaderContainer = document.querySelector('.loader-container');
const notificationsContainer = document.querySelector('.notifications-container');

const { showLoader, hideLoader } = loaderController(loaderContainer);
productsContainer.addEventListener("loadingProductsStarted", showLoader);
productsContainer.addEventListener("loadingProductsFinished", hideLoader);

const { showNotification } = notificationController(notificationsContainer);

productsContainer.addEventListener("emptyProducts", (e) => {
    showNotification(e.detail.type, e.detail.message);
})

productsContainer.addEventListener("productsLoadSuccessed", (e) => {
    showNotification(e.detail.type, e.detail.message);
})

productsContainer.addEventListener("productsLoadFailed", (e) => {
    showNotification(e.detail.type, e.detail.message);

});

    
productsListController(productsContainer);
