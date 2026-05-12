
import { dispatchProductsEvent } from "../utils/dispatch-event.js";
import { getProduct } from "./product-detail-model.js";
import { productDetailView } from "./product-detail-view.js";


export const productDetailController = async (productDetailContainer) => {

    const searchParams = new URLSearchParams(window.location.search);
    const productId= searchParams.get("id");
    try {

        dispatchProductsEvent(productDetailContainer, 'loadingProductsStarted')

        const product = await getProduct(productId);
        
        await new Promise(resolve => setTimeout(resolve, 2000));

        
        ShowProductDetail(product, productDetailContainer);

        dispatchProductsEvent(productDetailContainer, "productsLoadSuccessed", "Carga de producto exitosa", 'success');

    } catch (error){
        dispatchProductsEvent(productDetailContainer, "productsLoadFailed", error.message, 'error');
    } finally {
        dispatchProductsEvent(productDetailContainer, "loadingProductsFinished");
    }
}


const ShowProductDetail = (product, productDetailContainer) => {
    const productDetail = productDetailView(product);
    productDetailContainer.appendChild(productDetail);
} 