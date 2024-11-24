import Button from '../Button/ButtonMisc.jsx'
import {FaLocationDot} from "react-icons/fa6";

import DigitalTime from '../Misc/DigitalTime.jsx'
import axios from 'axios';

const CardCheckAttendance = () => {

    const handleCheckIn = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/checkin', {
                location: 'Infinite Learning - Gedung 2', // Example data
            });
            console.log('Check-in berhasil:', response.data);
            alert('Check-in beerhasil dicatat!');
        } catch (error) {
            console.error('Terjadi kesalahan saat check-in:', error);
            alert('Gagal mencatat check-in.');
        }
    };

    return (
        <div className={`CardAttendance shadow-md w-full p-8 rounded-md`}>
            <div>
                <p>Jam Kerja - 09:00 WIB</p>
                <DigitalTime/>
            </div>

            <div className={`flex flex-row items-center gap-4`}>
            <Button
            onClick={handleCheckIn}
            Class={`my-4 bg-green-400 text-white hover:bg-green-500`}
            BtnLabel={'Check In'}
            />

            <Button
            Class={`my-4 border border-solid border-purple-400 before:content-[''] before:`}
            BtnLabel={'Izin'}
            />

            </div>
            <div className={`flex flex-row gap-2 items-center`}>
                <FaLocationDot/>
                <p>Infinite Learning - Gedung 2</p>
            </div>

        </div>
    )
}
export default CardCheckAttendance
