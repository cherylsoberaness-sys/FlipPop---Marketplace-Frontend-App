export const editProduct = async (product, productId) => {
    const url = `http://localhost:8000/api/products/${productId}`;
    const token = localStorage.getItem('token');

    const response = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`          
        },
        body: JSON.stringify(product)

    })
    const editedProduct = await response.json();

    if(!response.ok) {
        throw new Error(editedProduct.message);
    }

    return editedProduct;
}