
export const buildProduct = (product) => {
    const productElement = document.createElement('a');
    productElement.classList.add('product-card');
    productElement.setAttribute('href', `product.html?id=${product.id}`);

    productElement.innerHTML =  `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            
            <div class="product-content-container">
                <h3 class="title">${product.name}</h1>
                <p class="type">${product.type}</p> 
                <p class="description">${product.description}</p>
                <p class="price">${product.price}</p>
            </div>  
            `
    return productElement;

    
}