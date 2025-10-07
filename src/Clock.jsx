import { useState, useEffect } from "react";

const ClockTime = ({ color }) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1 style={{
                color: color,
                background: '#000',
                width: '120px',
                padding: '10px'
            }}>
                {time}
            </h1>
        </div>
    );
}

export default ClockTime;