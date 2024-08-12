import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';

const Banner = ({ bannerData }) => {
    const [showBanner, setShowBanner] = useState(bannerData.isVisible);

    useEffect(() => {
        setShowBanner(bannerData.isVisible);
    }, [bannerData.isVisible]);

    return (
        <div className="banner">
            {showBanner && bannerData.timer > 0 && (
                <CountdownTimer initialSeconds={bannerData.timer} />
            )}
            {showBanner && (
                <>
                    <p>{bannerData.description}</p>
                    <p>Link: <a href={bannerData.link} target="_blank" rel="noopener noreferrer">{bannerData.link}</a></p>
                </>
            )}
        </div>
    );
};

export default Banner;
