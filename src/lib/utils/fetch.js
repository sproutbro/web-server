const tryFetch = async (url, option) => {
    try {
        const response = await fetch(url, option);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

const tryPOST = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export { tryFetch, tryPOST }