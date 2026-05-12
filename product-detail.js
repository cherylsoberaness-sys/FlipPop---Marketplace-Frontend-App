import { productDetailController } from "./product-detail/product-detail-controller.js";
import { loaderController } from "./loader/loader-controller.js";
import { notificationController } from "./notifications/notifications-controller.js"; 

const productDetailContainer = document.querySelector('.product-detail');
const loaderContainer = document.querySelector('.loader-container');
const notificationsContainer = document.querySelector('.notifications-container');

const { showLoader, hideLoader } = loaderController(loaderContainer);
productDetailContainer.addEventListener("loadingProductsStarted", showLoader);
productDetailContainer.addEventListener("loadingProductsFinished", hideLoader);

const { showNotification } = notificationController(notificationsContainer);


productDetailContainer.addEventListener("productsLoadSuccessed", (e) => {
    showNotification(e.detail.type, e.detail.message);
})

productDetailContainer.addEventListener("productsLoadFailed", (e) => {
    showNotification(e.detail.type, e.detail.message);

});

productDetailController(productDetailContainer);    