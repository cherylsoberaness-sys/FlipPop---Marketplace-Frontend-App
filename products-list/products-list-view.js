
export const buildProduct = (product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-card');

    productElement.innerHTML =  `
                <img src="${product.image}" alt="${product.name}"> 
                <h3>${product.name}</h1>
                <p>->${product.type}</p> 
                <p>${product.description}</p>
                <p>${product.price}</p> 
            `
    return productElement;

    
}