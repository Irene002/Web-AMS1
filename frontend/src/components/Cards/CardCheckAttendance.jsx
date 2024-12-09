import Button from '../Button/ButtonMisc.jsx'
import {FaLocationDot} from "react-icons/fa6";

import DigitalTime from '../Misc/DigitalTime.jsx'

const CardCheckAttendance = ({onclick, buttonLabel}) => {


    return (
        <div className={`CardAttendance shadow-md w-full p-8 rounded-md`}>
            <div>
                <p>On Duty - 09:00 WIB</p>
                <DigitalTime/>
            </div>

            <div className={`flex flex-row items-center gap-4`}>
            <Button
            onClick={onclick}
            Class={`my-4 bg-purple-500 text-white hover:bg-purple-400`}
            BtnLabel={buttonLabel}
            />

            </div>
            <div className={`flex flex-row gap-2 items-center`}>
                <FaLocationDot/>
                <p>Infinite Learning </p>
            </div>

        </div>
    )
}
export default CardCheckAttendance
