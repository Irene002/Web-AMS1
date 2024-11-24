import Card1 from '../../../components/Cards/Card1.jsx'
import CardData1 from'../../../DataMap/CardData1.jsx'
import CardCheckAttendance from '../../../components/Cards/CardCheckAttendance.jsx'
import CardTableHistoryAttendance from '../../../components/Cards/CardTableHistoryAttendance.jsx'

import { useState, useEffect } from 'react'

import axios from 'axios'

const Home = () => {

    const [attendanceHistory, setAttendanceHistory] = useState([]);

    // Fetch attendance history
    const fetchHistory = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/checkins');
            setAttendanceHistory(response.data);
        } catch (error) {
            console.error('Terjadi kesalahan saat mengambil riwayat kehadiran', error);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    // Handle new check-in record
    const handleCheckInSuccess = (newRecord) => {
        setAttendanceHistory((prevRecords) => [...prevRecords, newRecord]);
    };

    return (
        <div className={`FadeInSection`}>
            <h2 className='font-bold'>Selamat Datang <span className='GradientFont'>Sean Ishak Adare</span> ,</h2>
                <h4>Temukan halaman umum yang digunakan di bawah ini</h4>
            <hr className='mb-8 mt-4' />
            <div className={`flex flex-col gap-8`}>
            <CardCheckAttendance onCheckInSuccess={handleCheckInSuccess}/>
            <div className='grid xl:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>

                {CardData1.map((card,index) =>(
                <Card1
                    key={index}
                    Title={card.title}
                    TitleIcon={card.icon}
                    Description={card.description}
                    ButtonLabel={card.BtnLabel}
                    Path={card.path}
                />

                ))}
            </div>
            <div className={`flex flex-col gap-4`}>
                <div className={`flex flex-col gap-2`}>
                    <p className={`font-bold opacity-70 text-[1.2rem]`}>Riwayat Absensi</p>
                    <p className={`text-purple-500`}>Minggu 1, 27 Oktober 2024 <span className={`text-black`}>- Akan di reset secara otomatis setiap 7 hari. </span></p>
                </div>
                {attendanceHistory.length === 0 ? (
                <div className='shadow-md p-8 w-full flex justify-center rounded-md'> 
                    <p>Tidak ditemukan catatan kehadiran minggu ini.</p>
                </div>
            ) : (
                attendanceHistory.map((record, index) => (
                    <CardTableHistoryAttendance
                        key={index}
                        Date={new Date(record.checkInTime).toLocaleDateString()}
                        CheckIn={new Date(record.checkInTime).toLocaleTimeString()}
                        CheckOut={'--:--'} // Placeholder for now
                        Location={record.location}
                    />
                ))
            )}

            </div>
            </div>

        </div>
    )
}
export default Home
