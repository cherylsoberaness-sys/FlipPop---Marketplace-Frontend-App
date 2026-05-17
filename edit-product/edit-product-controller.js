import { editProduct } from "./edit-product-model.js";
import { uploadImage } from "../create-post/create-post-model.js";
import { getProduct } from "../product-detail/product-detail-model.js";
import { dispatchEvent } from "../utils/dispatch-event.js";


export const editProductController = async (editProductContainer, productId) => {
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

    try {
    
        dispatchEvent(editProductContainer, 'loadingProductStarted')
    
        const product = await getProduct(productId);

        const title = document.querySelector('.post-it')
        title.textContent = 'Editar Producto';

        const save = document.querySelector('button');
        save.textContent = 'Guardar';

        const productNameInput = document.querySelector('#product-name');
        productNameInput.value = product.name;

        const descriptionTextArea = document.querySelector('#product-description');
        descriptionTextArea.value = product.description;

        const productPrice = document.querySelector('#product-price');
        productPrice.value = product.price;

        const radioInputs = document.querySelectorAll('.type-radio');

        radioInputs.forEach(input => {
                if(input.value === product.type) {
                    input.checked = true;
                }
        });
                   
        await new Promise(resolve => setTimeout(resolve, 2000));

        dispatchEvent(editProductContainer, "productLoadSuccessed", "Carga de producto exitosa", 'success');

    } catch (error) {
        dispatchEvent(editProductContainer, "productLoadFailed", error.message, 'error');
    } finally {
        dispatchEvent(editProductContainer, 'loadingProductFinished');
    } 

    editProductContainer.addEventListener('submit', async (e) => {
        e.preventDefault();
        const editPostForm = new FormData(editProductContainer);
        const product = {
            image: editPostForm.get('image'),
            name: editPostForm.get('product-name'),
            description: editPostForm.get('product-description'),
            price: editPostForm.get('product-price'),
            type: editPostForm.get('type')
        }

        const imageFormData = new FormData();

        imageFormData.append('file', product.image);
        
        try {

            dispatchEvent(editProductContainer, 'createPostStarted');

            await new Promise(resolve => setTimeout(resolve, 500));
            
            const image = await uploadImage(imageFormData);
            product.image = image.path;

            await editProduct(product, productId);

            await new Promise(resolve => setTimeout(resolve, 500));

            dispatchEvent(editProductContainer, 'createPostSuccessed', 'Post editado exitosamente', 'success');

            setTimeout(() => {
                    window.location = '/';
            }, 1000);

        } catch (error) {

            dispatchEvent(editProductContainer, 'createPostFailed', error.message, 'error');
        } finally {
            dispatchEvent(editProductContainer, 'createPostFinished');
        }
    })

}