import { createPostController } from "./create-post/create-post-controller.js";
import { editProductController } from "./edit-product/edit-product-controller.js";
import { loaderController } from "./loader/loader-controller.js";
import { notificationController } from "./notifications/notifications-controller.js";

const loaderContainer = document.querySelector('.loader-container');
const notificationsContainer = document.querySelector('.notifications-container');
const createPostContainer = document.querySelector('.create-post-form');
const createLoginNotification = document.querySelector('.create-post-container');

createLoginNotification.addEventListener('userNotLogged', (e) => {
    showNotification(e.detail.type, e.detail.message);
})

const { showLoader, hideLoader } = loaderController(loaderContainer);
createPostContainer.addEventListener('createPostStarted', showLoader);
createPostContainer.addEventListener('createPostFinished', hideLoader);


const { showNotification } = notificationController(notificationsContainer);

createPostContainer.addEventListener('userNotLogged', (e) => {
    showNotification(e.detail.type, e.detail.message); 
});

createPostContainer.addEventListener("createPostSuccessed", (e) => {
    showNotification(e.detail.type, e.detail.message);
})
createPostContainer.addEventListener("createPostFailed", (e) => {
    showNotification(e.detail.type, e.detail.message);
})

createPostContainer.addEventListener('loadingProductStarted', showLoader);
createPostContainer.addEventListener('loadingProductFinished', hideLoader);

createPostContainer.addEventListener("productLoadSuccessed", (e) => {
    showNotification(e.detail.type, e.detail.message);
})

createPostContainer.addEventListener("productLoadFailed", (e) => {
    showNotification(e.detail.type, e.detail.message);
})


const searchParams = new URLSearchParams(window.location.search);
const productId= searchParams.get("id");

if(productId) {
    editProductController(createPostContainer, productId);
} else {
    createPostController(createPostContainer);
}

