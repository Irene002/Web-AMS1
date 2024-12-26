import Card1 from '../../../components/Cards/Card1.jsx'
import CardData1 from '../../../DataMap/CardData1.jsx'
import CardCheckAttendance from '../../../components/Cards/CardCheckAttendance.jsx'
import CardTableHistoryAttendance from '../../../components/Cards/CardTableHistoryAttendance.jsx'

import { FaXmark } from 'react-icons/fa6'

import { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        console.log("Stored user in localStorage:", storedUser); 

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            console.log("Parsed user object:", parsedUser); 

            setUser(parsedUser);
        } else {
            console.error("No user found in localStorage");
        }
    }, []);

    // Check In Button Disable & Enable

    const [isCheckInDisable, setCheckInDisabled] = useState(false);

    // Check In Pop Up
    const [isOpenCheck, setisOpenCheck] = useState(false);
    const closeCheck = () => {
        setisOpenCheck(false);
    }

    // Check Out PopUp
    const [CheckOutPopupOpen, setCheckOutPopupOpen] = useState(false)
    const [isCheckOutDisable, setCheckOutDisabled] = useState(true);

    // Attendance
    const [attendance, setAttendance] = useState([])

    const [TableAttendance, setTableAttendance] = useState([])

    const [selected, setSelected] = useState(null);

    // Handle Selection WFH & WFC
    const handleSelection = (option) => {
        setSelected((prev) => (prev === option ? null : option));
    };

    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const day = String(now.getDate()).padStart(2, '0');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const formattedDate = `${dayOfWeek}, ${day} ${month} ${year}`;
    const currentTime = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    const fetchAttendance = async () => {
        try {
            const response = await axios.get('http://localhost:3015/getAttendance', { params: { id_user: 1 } });
            console.log("Fetched attendance data:", response.data);
            setTableAttendance(response.data.data); 
        } catch (error) {
            console.error('Error fetching attendance:', error);
        }
    }

    // Render fetch Data

    useEffect(() => {
        fetchAttendance()
    }, [])


    const handleCheckIn = async () => {
        const newAttendance = {
            id_user: 1, 
            date: formattedDate,
            check_in: currentTime,
            check_out: null, 
            status: selected || 'On-Site',
        };
    
        console.log("Check-in payload:", newAttendance);
    
        try {
            const response = await axios.post('http://localhost:3015/checkin', newAttendance);
            console.log("Response from server:", response.data);
    
            // Add the new attendance
            setAttendance([...attendance, response.data]);
    
            // Fetch data
            await fetchAttendance();
    
            setisOpenCheck(false);
            setCheckInDisabled(true);
            setCheckOutDisabled(false);
        } catch (error) {
            console.error("Error during check-in:", error.response?.data || error.message);
        }
    };



    const handleCheckOut = async (id_attendance) => {
        try {
            const check_out = currentTime;
    
            console.log("Check-out time:", check_out); 
    
            const response = await axios.post('http://localhost:3015/checkout', { check_out, id_attendance });
    
            if (response.status === 200) {

                console.log("Check-out successful:", response.data);
            }
        } catch (error) {
            console.error('Error during check-out:', error.response?.data || error.message);
        }
    };



    return (
        <>
            {isOpenCheck && (
                <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50'>
                    <div className='bg-white p-8 rounded-lg w-full max-w-[600px] min-w-[400px] FadeIn'>
                        <div className='flex justify-end'>
                            <button onClick={closeCheck} className='text-xl p-2 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg'><FaXmark /></button>
                        </div>
                        <h4>Check In</h4>
                        <div className='mt-4'>
                            <p>Select Status Check In (Optional)</p>
                            <div className='flex flex-row gap-4 items-center mt-4'>
                                <button onClick={() => handleSelection('Work From Home')} className={`shadow-sm shadow-gray-300 p-4 rounded-md transition-all duration-300 ${selected === 'Work From Home' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>Work from Home</button>
                                <button onClick={() => handleSelection('Work From Cafe')} className={`shadow-sm shadow-gray-300 rounded-md p-4 transition-all duration-300 ${selected === 'Work From Cafe' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>Work from Cafe</button>
                            </div>
                        </div>
                        <form className='mt-8 flex flex-col gap-4'>
                            <label htmlFor="description">Description (Optional)</label>
                            <textarea className='border h-[10rem] resize-none border-solid border-black p-4 focus:outline-none' name="description" id="descriptionCheck" placeholder='Write Description...'></textarea>
                        </form>
                        <div className='flex flex-row gap-4 justify-end mt-8'>
                            <button onClick={closeCheck} className='p-4 rounded-md bg-gray-100 transition-all duration-300 hover:bg-gray-200'>Cancel</button>
                            <button onClick={handleCheckIn} className='p-4 rounded-md bg-purple-500 text-white transition-all duration-300 hover:bg-purple-600'>Check In</button>
                        </div>
                    </div>
                </div>
            )}

            {CheckOutPopupOpen && (
                <div className='inset-0 z-50 bg-black bg-opacity-30 fixed flex justify-center items-center'>
                    <div className='bg-white w-full max-w-[500px] min-w-[200px] p-4 rounded-md'>
                        <div className='flex justify-end'>
                            <button onClick={() => setCheckOutPopupOpen(false)} className='p-2 transition-all duration-300 rounded-md hover:bg-purple-500 hover:text-white'> <FaXmark /> </button>
                        </div>
                    </div>
                </div>
            )}

            <div className={`FadeInSection`}>
                <h2>Hello, <span className='GradientFont'>Sean Ishak Adare</span></h2>
                <h4>Find commonly used pages below.</h4>
                <hr className='mb-8 mt-4' />
                <div className={`flex flex-col gap-8`}>
                    <CardCheckAttendance
                        onclickCheckIn={() => setisOpenCheck(true)}
                        onclickCheckOut={handleCheckOut}
                        disableCheckIn={isCheckInDisable}
                        disableCheckOut={isCheckOutDisable}
                    />
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
                        {/* <div className={`flex flex-col gap-2 mt-4`}>
                            <p className={`font-bold opacity-70 text-[1.2rem]`}> Attendance History (Users)</p>
                            <p className={`text-purple-500`}>Week 1, 27 October 2024 <span className={`text-black`}>- Automatically resets every 7 days. </span></p>
                        </div>
                        <CardTableList /> */}
                    </div>
                    <div className={`flex flex-col gap-4`}>
                        <div className={`flex flex-col gap-2`}>
                            <p className={`font-bold opacity-70 text-[1.2rem]`}>Attendance History</p>
                            <p className={`text-purple-500`}>Week 1, 27 October 2024 <span className={`text-black`}>- Automatically resets every 7 days. </span></p>
                        </div>

                        {TableAttendance.length === 0 ? (
                            <div className={`shadow-md rounded-md p-8 w-full max-w-full min-w-[500px] transition-all duration-500`}>
                                No Records found this week.
                            </div>
                        ) : (
                            TableAttendance.slice().reverse().map((entry, index) => (
                                <CardTableHistoryAttendance
                                    key={index}
                                    Date={entry.date}
                                    CheckIn={entry.check_in}
                                    CheckOut={entry.check_out}
                                    Status={entry.status}
                                />
                            ))
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}
export default Home
