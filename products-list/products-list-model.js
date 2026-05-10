export const getProducts = async () => {
    const url = `http://localhost:8001/api/products`
    const response = await fetch(url);
    const products = await response.json();

    return products
}