export const uploadImage = async (image) => {
    const url = 'http://localhost:8001/upload'
    const token = localStorage.getItem('token');

    const response = await fetch(url, {
        method: 'POST',
        body: image
    })

    const imageloaded = await response.json();
    if(!response.ok) {
        throw new Error(imageloaded.message);
    }

    return imageloaded;
}

export const postProduct = async (product) => {
    const url = 'http://localhost:8001/api/products';
    const token = localStorage.getItem('token');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`          
        },
        body: JSON.stringify(product)

    })
    const createdPost = await response.json();

    if(!response.ok) {
        throw new Error(createdPost.message);
    }

    return createdPost;
}

