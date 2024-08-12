const API_URL = 'http://localhost:5000/api';

const getBanner = async () => {
    const response = await fetch(`${API_URL}/banner`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const updateBanner = async (data) => {
    await fetch(`${API_URL}/banner`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};

export default {
    getBanner,
    updateBanner,
};
