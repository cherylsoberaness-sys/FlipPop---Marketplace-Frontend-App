
export const buildProduct = (product) => {
    const productElement = document.createElement('a');
    productElement.classList.add('product-card');
    productElement.setAttribute('href', `product.html?id=${product.id}`);

    productElement.innerHTML =  `
                <img src="${product.image}" alt="${product.name}"> 
                <h3>${product.name}</h1>
                <p>->${product.type}</p> 
                <p>${product.description}</p>
                <p>${product.price}</p> 
            `
    return productElement;

    
}