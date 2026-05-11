

export const productDetailView = (product) => {
    const productDetailContainer = document.createElement('div');
    productDetailContainer.classList.add('product-card');

    productDetailContainer.innerHTML =  `
                <img src="${product.image}" alt="${product.name}"> 
                <h3>${product.name}</h1>
                <p>->${product.type}</p> 
                <p>${product.description}</p>
                <p>${product.price}</p> 
            `
    return productDetailContainer;

}