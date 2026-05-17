

export const productDetailView = (product) => {
    const productDetailContainer = document.createElement('div');
    productDetailContainer.classList.add('product-card-detail');

    productDetailContainer.innerHTML =  `
            
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-content-container">   
                <h3 class="title">${product.name}</h3>
                <p class="type">${product.type}</p> 
                <p class="description">${product.description}</p>
                <p class="price">${product.price}</p>
                <p class="username">${product.user.username}</p>
            </div> 
            `
    return productDetailContainer;

}


export const buildRemoveProductButton = () => {
     const removeProductButton = document.createElement('button')
     removeProductButton.classList.add('dlt-btn');
     removeProductButton.textContent = 'Eliminar Producto'

     return removeProductButton;
}

export const buildEditProductButton = () => {
    const editProductButton = document.createElement('button');
    editProductButton.classList.add('edit-btn');
    editProductButton.textContent = 'Editar Producto';

    return editProductButton;
}