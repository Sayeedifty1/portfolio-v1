import  { useEffect, useState } from 'react';

const Odometer = ({ score }) => {
    const [currentScore, setCurrentScore] = useState(0);

    useEffect(() => {
        let animationStartTime;
        const animationDuration = 1000; // 1 second

        const startAnimation = (timestamp) => {
            if (!animationStartTime) {
                animationStartTime = timestamp;
            }

            const elapsed = timestamp - animationStartTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            const newScore = Math.floor(progress * score);

            setCurrentScore(newScore);

            if (progress < 1) {
                requestAnimationFrame(startAnimation);
            }
        };

        requestAnimationFrame(startAnimation);

        return () => {
            animationStartTime = null;
        };
    }, [score]);

    return <div>{currentScore}</div>;
};

export default Odometer;
