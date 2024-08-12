const API_URL = 'https://dynamic-banner-page-18gz.vercel.app/api';

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
