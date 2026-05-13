export const getUser = async (token) =>  {
    const url = `http://localhost:8001/auth/me`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const userData = await response.json();

    return userData;
}