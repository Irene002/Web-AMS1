import Card1 from '../../../components/Cards/Card1.jsx'
import CardData1 from '../../../DataMap/CardData1.jsx'
import CardCheckAttendance from '../../../components/Cards/CardCheckAttendance.jsx'
import CardTableHistoryAttendance from '../../../components/Cards/CardTableHistoryAttendance.jsx'
import CardTableList from '../../../components/Cards/CardTableList.jsx'

import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        try{
            const result = await axios.get(`http://localhost:3015/checkin`)
            setData(result.data.data);
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    },[])

    const [buttonState, setButtonState] = useState({
        status: 'check_in', visible: true
    });

    const now = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];

    const day = String(now.getDate()).padStart(2, '0');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;
5
    const currentTime = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;


    const handleClick = async () => {
        if (buttonState.status === 'check_in') {
            const newRow = { Date: formattedDate, checkin: currentTime, checkout: null };
            setData((prevData) => [...prevData, newRow]);
            // await axios.post('http://localhost:3015/checkin', [checkin])
            // await axios.post('https://jsonplaceholder.typicode.com/posts');
            console.log(`Success check-in in ${formattedDate} at ${currentTime}`)

            setButtonState({ status: 'check_out', visible: true });
        } else if (buttonState.status === 'check_out') {
            setData((prevData) => {
                const updatedData = [...prevData];
                updatedData[updatedData.length - 1].checkout = currentTime;
                return updatedData;
            });
            
            // await axios.post('http://localhost:3015/checkout', [checkout])
            console.log(`Success check-out at ${currentTime}`);

            setButtonState({ status: 'check_in', visible: false });

            setTimeout(() => {
                setButtonState({ status: 'check_in', visible: true });
            }, 20000)
        }
    }

    return (
        <div className={`FadeInSection`}>
            <h2 className='font-bold'>Welcome <span className='GradientFont'>Sean Ishak Adare</span> ,</h2>
            <h4>Find commonly used pages below.</h4>
            <hr className='mb-8 mt-4' />
            <div className={`flex flex-col gap-8`}>
                {buttonState.visible && (
                    <CardCheckAttendance
                        onclick={handleClick}
                        buttonLabel={buttonState.status === 'check_in' ? 'Check In' : 'Check Out'}
                    />
                )}
                <div className={`flex flex-col gap-4`}>
                    <div className='grid xl:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
                        {CardData1.map((card, index) => (
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
                    <div className={`flex flex-col gap-2`}>
                        <p className={`font-bold opacity-70 text-[1.2rem]`}> Attendance History (Users)</p>
                        <p className={`text-purple-500`}>Week 1, 27 October 2024 <span className={`text-black`}>- Automatically resets every 7 days. </span></p>
                    </div>
                    <CardTableList />
                </div>
                <div className={`flex flex-col gap-4`}>
                    <div className={`flex flex-col gap-2`}>
                        <p className={`font-bold opacity-70 text-[1.2rem]`}>Attendance History</p>
                        <p className={`text-purple-500`}>Week 1, 27 October 2024 <span className={`text-black`}>- Automatically resets every 7 days. </span></p>
                    </div>

                    {data.length === 0 ? (
                        <div className={`shadow-md rounded-md p-8 w-full max-w-full min-w-[500px] transition-all duration-500`}>
                            No Records found this week.
                        </div>
                    ) : (
                        data.map((entry, index) => (
                            <CardTableHistoryAttendance
                                key={index}
                                Date={entry.Date}
                                CheckIn={entry.checkin}
                                CheckOut={entry.checkout}
                            />
                        ))
                    )}



                </div>
            </div>

        </div>
    )
}
export default Home
