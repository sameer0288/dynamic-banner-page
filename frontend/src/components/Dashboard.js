import React, { useState } from 'react';

const Dashboard = ({ bannerData, onUpdate }) => {
    const [description, setDescription] = useState(bannerData ? bannerData.description : '');
    const [timer, setTimer] = useState(bannerData ? bannerData.timer : 0);
    const [link, setLink] = useState(bannerData ? bannerData.link : '');
    const [isVisible, setIsVisible] = useState(bannerData ? bannerData.isVisible : false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (timer < 0) {
            setError('Timer must be a positive number.');
            return;
        }
        
        setError('');
        onUpdate({ description, timer, link, isVisible });
    };

    return (
        <div className="dashboard">
            <h2>Banner Settings</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Description:
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-control"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Timer (seconds):
                        <input
                            type="number"
                            value={timer}
                            onChange={(e) => setTimer(Number(e.target.value))}
                            className="form-control"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Link:
                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            className="form-control"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Banner Visible:
                        <input
                            type="checkbox"
                            checked={isVisible}
                            onChange={(e) => setIsVisible(e.target.checked)}
                            className="form-check"
                        />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Update Banner</button>
            </form>
        </div>
    );
};

export default Dashboard;
