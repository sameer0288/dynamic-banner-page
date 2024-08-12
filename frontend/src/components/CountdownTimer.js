import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds }) => {
    const [timeLeft, setTimeLeft] = useState(initialSeconds);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        // Initialize timer only when `initialSeconds` changes
        if (initialSeconds !== timeLeft) {
            setTimeLeft(initialSeconds);
            setHasStarted(true);
        }
    }, [initialSeconds]);

    useEffect(() => {
        if (!hasStarted || timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timerId);
                    setHasStarted(false); // Timer finished
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId); // Cleanup on component unmount
    }, [timeLeft, hasStarted]);

    return (
        <div className="countdown-timer">
            {timeLeft > 0 ? (
                `Time left: ${timeLeft}s`
            ) : (
                <span>Banner Expired</span>
            )}
        </div>
    );
};

export default CountdownTimer;
