export const getProduct = async (productId) => {
    const url = `http://localhost:8001/api/products/${productId}`
    const response = await fetch(url);
    const product = await response.json();

    if(!response.ok) {
        throw new Error('El producto no existe');
    }

    return product;
}