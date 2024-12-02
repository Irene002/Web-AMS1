import { useState } from "react"
import axios from "axios"
const About = () => {
    const [data,setData] = useState([]);
    const [buttonState,setButtonState] = useState({
        status: 'check_in',
        visible: true,
    })

    const handleClick = async () => {
        const now = new Date();
        const currentTime = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
        if (buttonState.status === 'check_in') {
            const newRow = { checkin: currentTime, checkout: null };
            
            setData((prevData) => [...prevData, newRow]);
    
            await axios.post('http://localhost:3015/checkin', { check_in: currentTime });
    
            setButtonState({ status: 'check_out', visible: true });

        } else if (buttonState.status === 'check_out') {
            setData((prevData) => {
                const updatedData = [...prevData];
                updatedData[updatedData.length - 1].checkout = currentTime;
                return updatedData;
            })
    
            await axios.post('http://localhost:3015/checkout', { check_out: currentTime });
    
            setButtonState({ status: 'check_in', visible: false });

            setTimeout(() => {
                setButtonState({ status: 'check_in', visible: true });
            }, 20000);
        }
    };
    
    
    return (
        <>
        <div>
            <h1>Title</h1>
            {buttonState.visible && (
                <button className="p-4 bg-black text-white" onClick={handleClick}>
                    {buttonState.status === 'check_in' ? 'Check In' : 'Check Out'}
                </button>
            )}
        </div>

        <h3>Data Table</h3>
        <table border='1' className="w-full">
            <thead>
                <tr>
                    <th>Check In</th>
                    <th>Check Out</th>
                </tr>
            </thead>
            <tbody>
                {data.map((entry, index) => (
                    <tr key={index}>
                        <td className="select-text">{entry.checkin}</td>
                        <td>{entry.checkout || ''}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default About
