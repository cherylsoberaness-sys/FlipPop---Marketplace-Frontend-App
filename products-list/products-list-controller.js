import { getProducts } from "./products-list-model.js";
import { buildProduct } from "./products-list-view.js";
import { dispatchProductsEvent } from "../utils/dispatch-event.js";

export const productsListController = async (productsContainer) => {
    productsContainer.innerHTML = '';
    try {
        
        dispatchProductsEvent(productsContainer, 'loadingProductsStarted');

        const products = await getProducts();

        await new Promise(resolve => setTimeout(resolve, 2000));

        if (products.length === 0) {
            dispatchProductsEvent(productsContainer, 'emptyProducts', 'No hay productos que mostrar', 'empty')
            return;
        }


        showProducts(products, productsContainer);

        dispatchProductsEvent(productsContainer, "productsLoadSuccessed", 'Carga de productos exitosa', 'success')

    } catch (error) {
        dispatchProductsEvent(productsContainer, "productsLoadFailed", 'Error en la carga de productos', 'error');
        
    } finally {
        dispatchProductsEvent(productsContainer, "loadingProductsFinished");
    }

}


const showProducts = (products, productsContainer) => {
    products.forEach((product) => {
        const newProduct = buildProduct(product);
        productsContainer.appendChild(newProduct);
    })
}



