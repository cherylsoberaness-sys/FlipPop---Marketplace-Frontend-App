import { getProducts } from "./products-list-model.js";
import { buildProduct } from "./products-list-view.js";
import { dispatchEvent } from "../utils/dispatch-event.js";

export const productsListController = async (productsContainer) => {
    productsContainer.innerHTML = '';
    try {
        
        dispatchEvent(productsContainer, 'loadingProductsStarted');

        const products = await getProducts();

        await new Promise(resolve => setTimeout(resolve, 2000));

        if (products.length === 0) {
            dispatchEvent(productsContainer, 'emptyProducts', 'No hay productos que mostrar', 'empty')
            return;
        }


        showProducts(products, productsContainer);

        dispatchEvent(productsContainer, "productsLoadSuccessed", 'Carga de productos exitosa', 'success')

    } catch (error) {
        dispatchEvent(productsContainer, "productsLoadFailed", 'Error en la carga de productos', 'error');
        
    } finally {
        dispatchEvent(productsContainer, "loadingProductsFinished");
    }

}


const showProducts = (products, productsContainer) => {
    products.forEach((product) => {
        const newProduct = buildProduct(product);
        productsContainer.appendChild(newProduct);
    })
}



