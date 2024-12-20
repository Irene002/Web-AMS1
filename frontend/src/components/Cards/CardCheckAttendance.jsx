import Button from '../Button/ButtonMisc.jsx'
import { FaLocationDot } from "react-icons/fa6";

import DigitalTime from '../Misc/DigitalTime.jsx'

const CardCheckAttendance = ({ onclickCheckIn, onclickCheckOut, disableCheckIn, disableCheckOut }) => {


    return (
        <div className={`CardAttendance shadow-md w-full p-8 rounded-md`}>
            <div>
                <p>On Duty - 09:00 WIB</p>
                <DigitalTime />
            </div>

            <div className={`flex flex-row items-center gap-4`}>
                <Button
                    disableBtn={disableCheckIn}
                    onClick={onclickCheckIn}
                    Class={`my-4 text-white
                        ${
                            disableCheckIn ? 'cursor-not-allowed bg-purple-950' : 'bg-purple-500 hover:bg-purple-400'
                        }
                        `}
                    BtnLabel={'Check In'}
                />
                <Button
                    disableBtn={disableCheckOut}
                    onClick={onclickCheckOut}
                    Class={`my-4 text-white
                        ${
                            disableCheckOut ? 'cursor-not-allowed bg-red-300' : 'bg-red-500 hover:bg-red-600'
                        }
                        `}
                    BtnLabel={'Check Out'}
                />

            </div>
            <div className={`flex flex-row gap-2 items-center`}>
                <FaLocationDot />
                <p>Infinite Learning </p>
            </div>

        </div>
    )
}
export default CardCheckAttendance
