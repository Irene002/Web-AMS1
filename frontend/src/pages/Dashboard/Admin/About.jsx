import { useState } from "react"
import axios from "axios"
const About = () => {
    const [data,setData] = useState([]);
    const [buttonState,setButtonState] = useState({
        status: 'checkin',
        visible: true,
    })

    const handleClick = async () => {
        const currentTime = new Date().toISOString();

        if (buttonState.status === 'check in') {
            const newRow = {checkin: currentTime, checkout: null};
            setData((prevData) => [...prevData, newRow]);

            await axios.post('http://localhost:3015/checkin', {checkin: currentTime});

            setButtonState({status: 'checkout', visible: true});
        } else if (buttonState.status === 'checkout') {
            const updatedData = [...data];
            updatedData[updatedData.length - 1].checkout = currentTime;
            setData(updatedData);

            await axios.post('http://localhost:3015/checkout', {checkout: currentTime});

            setButtonState({status: 'checkin', visible:false});
            setTimeout(() => {
                setButtonState({status: 'checkin', visible: true})
            }, 20000);
        }
    }
    return (
        <>
        <div>
            <h1>Title</h1>
            {buttonState.visible && (
                <button className="p-4 bg-black text-white" onClick={handleClick}>
                    {buttonState.status === 'checkin' ? 'Check In' : 'Check Out'}
                </button>
            )}
        </div>

        <h3>Data Table</h3>
        <table border='1'>
            <thead>
                <tr>
                    <th>Check In</th>
                    <th>Check Out</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.checkin}</td>
                        <td>{entry.checkout || '-'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default About
