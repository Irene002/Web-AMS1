import { useState, useEffect } from "react";

function DigitalTime() {
    const [time, setTime] = useState("");

    useEffect(() => {
        // Function to format and update the time
        const updateClock = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString('en-GB'); // Format the time (e.g., "10:24:35 AM")
            setTime(formattedTime);
        };

        // Update the clock immediately and then every second
        updateClock();
        const intervalId = setInterval(updateClock, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <h3>
            {time}
        </h3>
        </>
    );
}

export default DigitalTime;
