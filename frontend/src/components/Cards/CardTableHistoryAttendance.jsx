import { FaChevronDown } from 'react-icons/fa'
import { useState, useEffect } from "react";

const CardTableHistoryAttendance = ({ Date, CheckIn, CheckOut, Location }) => {

    const [isActive, setIsActive] = useState(false);

    const CollapseClick = () => {
        setIsActive(!isActive);
    };


    return (
        <>
            <div className={`shadow-md rounded-md p-8 w-full max-w-full min-w-[500px] transition-all duration-500`}>
                <div className={`flex flex-row justify-between items-center`}>
                    <p>{Date}</p>
                    <button onClick={CollapseClick} className={`hover:bg-gray-100 rounded-full p-2 CollapseBtn ${isActive ? 'BtnRotated' : ''}`}>
                        <FaChevronDown />
                    </button>
                </div>
                <div className={`AttendanceHistoryContainer ${isActive ? 'extend' : ''} mt-8 flex flex-col gap-8 transition-all duration-500 overflow-clip`}>
                    <div>
                        <h5>Checked In</h5>
                        <p>{CheckIn}</p>
                    </div>
                    <div>
                        <h5>Checked Out</h5>
                        <p>{CheckOut}</p>
                    </div>
                    <div>
                        <h5>Location</h5>
                        <p>{Location}</p>
                    </div>
                    <div>
                        <h5>Status</h5>
                        <p>--:--</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardTableHistoryAttendance
