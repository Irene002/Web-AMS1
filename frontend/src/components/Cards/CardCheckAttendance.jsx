import Button from '../Button/ButtonMisc.jsx'
import {FaLocationDot} from "react-icons/fa6";

import DigitalTime from '../Misc/DigitalTime.jsx'
import axios from 'axios';

const CardCheckAttendance = () => {


    return (
        <div className={`CardAttendance shadow-md w-full p-8 rounded-md`}>
            <div>
                <p>On Duty time - 09:00</p>
                <DigitalTime/>
            </div>

            <div className={`flex flex-row items-center gap-4`}>
            <Button
            Class={`my-4 bg-green-400 text-white hover:bg-green-500`}
            BtnLabel={'Check In'}
            />

            <Button
            Class={`my-4 border border-solid border-purple-400 before:content-[''] before:`}
            BtnLabel={'Permit'}
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
