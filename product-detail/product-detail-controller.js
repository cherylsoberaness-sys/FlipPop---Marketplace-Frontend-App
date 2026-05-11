
import { getProduct } from "./product-detail-model.js";
import { productDetailView } from "./product-detail-view.js";


export const productDetailController = async (productDetailContainer) => {

    const searchParams = new URLSearchParams(window.location.search);
    const productId= searchParams.get("id");
    try {
        const product = await getProduct(productId);
        ShowProductDetail(product, productDetailContainer);
    } catch (error){
        console.log(error);
    }
}


const ShowProductDetail = (product, productDetailContainer) => {
    const productDetail = productDetailView(product);
    productDetailContainer.appendChild(productDetail);
} 