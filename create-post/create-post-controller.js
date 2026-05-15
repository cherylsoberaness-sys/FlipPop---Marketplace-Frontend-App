import { postProduct } from "./create-post-model.js";
import { uploadImage } from "./create-post-model.js";
import { dispatchEvent } from "../utils/dispatch-event.js";

export const createPostController = (createPostContainer) => {
    const token = localStorage.getItem('token');

    if(!token) {
        const postContainer = document.querySelector('.create-post-container')
        postContainer.style.display = 'none';
        postContainer.innerHTML = '';
        dispatchEvent(postContainer, 'userNotLogged', 'Favor de iniciar sesion', 'error');
        setTimeout(() => {
            window.location = '/login.html';
        }, 1000);

        return;
    }

    createPostContainer.addEventListener('submit', async (e) => {
        e.preventDefault();
        const createPostForm = new FormData(createPostContainer);
        const product = {
            image: createPostForm.get('image'),
            name: createPostForm.get('product-name'),
            description: createPostForm.get('product-description'),
            price: createPostForm.get('product-price'),
            type: createPostForm.get('type')
        }

        const imageFormData = new FormData();

        imageFormData.append('file', product.image);
        
        try {

            dispatchEvent(createPostContainer, 'createPostStarted');

            await new Promise(resolve => setTimeout(resolve, 500));

            const image = await uploadImage(imageFormData);
            product.image = image.path;

            await postProduct(product);

            await new Promise(resolve => setTimeout(resolve, 500));

            dispatchEvent(createPostContainer, 'createPostSuccessed', 'Post creado exitosamente', 'success');

            setTimeout(() => {
                    window.location = '/';
            }, 1000);

        } catch (error) {

            dispatchEvent(createPostContainer, 'createPostFailed', error.message, 'error');
        } finally {
            dispatchEvent(createPostContainer, 'createPostFinished');
        }
    })

}


