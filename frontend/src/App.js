import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import api from './api/bannerApi';

const App = () => {
    const [bannerData, setBannerData] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const data = await api.getBanner();
                setBannerData(data);
            } catch (error) {
                console.error('Error fetching banner:', error);
            }
        };
        fetchBanner();
    }, []);

    const handleUpdate = async (updatedData) => {
        try {
            await api.updateBanner(updatedData);
            setBannerData(updatedData);
        } catch (error) {
            console.error('Error updating banner:', error);
        }
    };

    return (
        <div>
            {bannerData && <Banner bannerData={bannerData} />}
            <Dashboard bannerData={bannerData} onUpdate={handleUpdate} />
        </div>
    );
};

export default App;
