import { getProducts } from "./products-list-model.js";
import { buildProduct } from "./products-list-view.js";

export const productsListController = async (productsContainer) => {
    productsContainer.innerHTML = '';
    try {
        const productsLoading = new CustomEvent("loadingProductsStarted");
        productsContainer.dispatchEvent(productsLoading);

        const products = await getProducts();

        await new Promise(resolve => setTimeout(resolve, 2000));

        if (!products) {
            throw new Error('No fue posible cargar los productos');
        } else if (products.length === 0) {
            const emptyProductsEvent = new CustomEvent("emptyProducts", {
                detail: {
                    message: "No hay productos que mostrar",
                    type: 'empty'
                }
            })

            productsContainer.dispatchEvent(emptyProductsEvent);
        }


        showProducts(products, productsContainer);

        const loadSuccessEvent = new CustomEvent("productsLoadSuccessed", {
            detail: {
                message: "Carga de productos exitosa",
                type: 'success'
            }
        })
        productsContainer.dispatchEvent(loadSuccessEvent);

    } catch (error) {
        const productsFailedEvent = new CustomEvent("productsLoadFailed", {
            detail: {
                message: error.message,
                type: error.name
            }
        })
        productsContainer.dispatchEvent(productsFailedEvent);
        
    } finally {
        const productsLoaded = new CustomEvent("loadingProductsFinished");
        productsContainer.dispatchEvent(productsLoaded);
    }

}


const showProducts = (products, productsContainer) => {
    products.forEach((product) => {
        const newProduct = buildProduct(product);
        productsContainer.appendChild(newProduct);
    })
}

