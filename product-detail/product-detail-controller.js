import { getLoggedUser } from "./product-detail-model.js";
import { dispatchEvent } from "../utils/dispatch-event.js";
import { getProduct } from "./product-detail-model.js";
import { productDetailView } from "./product-detail-view.js";
import { removeProduct } from "./product-detail-model.js";
import { buildRemoveProductButton } from "./product-detail-view.js";


export const productDetailController = async (productDetailContainer) => {

    const searchParams = new URLSearchParams(window.location.search);
    const productId= searchParams.get("id");
    
    if(!productId){
        window.location = '/'
    }

    try {

        dispatchEvent(productDetailContainer, 'loadingProductsStarted')

        const product = await getProduct(productId);

        await new Promise(resolve => setTimeout(resolve, 2000));
        
        ShowProductDetail(product, productDetailContainer);

        handleUserActions(product, productDetailContainer);

        dispatchEvent(productDetailContainer, "productsLoadSuccessed", "Carga de producto exitosa", 'success');

    } catch (error){
        dispatchEvent(productDetailContainer, "productsLoadFailed", error.message, 'error');
    } finally {
        dispatchEvent(productDetailContainer, "loadingProductsFinished");
    }
}


const ShowProductDetail = (product, productDetailContainer) => {
    const productDetail = productDetailView(product);
    productDetailContainer.appendChild(productDetail);
} 


const confirmRemoveProduct = async (producId) => {
    const shouldRemove = window.confirm('¿Realmente quieres eliminar el tweet?');

    if(shouldRemove){
        try {
            await removeProduct(producId);
            window.location = '/';
        } catch (error){

        }
    }
}

const handleRemoveProduct = (product, productDetailContainer) => {
    const removeProductButton = buildRemoveProductButton();
    productDetailContainer.appendChild(removeProductButton);
    removeProductButton.addEventListener('click', (e) => {
        confirmRemoveProduct(product.id);
    })
}

const handleUserActions = async (product, productDetailContainer) => {
    const productUserId = product.userId;
    const token = localStorage.getItem('token');

    if(token){
        try {
            const user = await getLoggedUser(token);
            if(user.id === Number(productUserId)) {
                handleRemoveProduct(product, productDetailContainer);
            }
        } catch (error){

        }
    }

} 
