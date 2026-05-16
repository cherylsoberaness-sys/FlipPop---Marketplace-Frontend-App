
export const getLoggedUser = async (userToken) => {
    const url = `http://localhost:8000/auth/me`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`
        }
    });
    const user = await response.json();

    return user;
} 




export const getProduct = async (productId) => {
    const url = `http://localhost:8000/api/products/${productId}?_expand=user`
    const response = await fetch(url);
    const product = await response.json();

    if(!response.ok) {
        throw new Error('El producto no existe');
    }

    return product;
}


export const removeProduct = async (productId) => {
    const url = `http://localhost:8000/api/products/${productId}`

    const token = localStorage.getItem('token');

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const deletedProduct = await response.json();

    if(!response.ok){
        throw new Error(deletedProduct.message);
    }

    return deletedProduct;
}