import {FaGear, FaHouse, FaFileLines, FaUser} from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const MobileNav = ({ClassName}) => {

    const Navigate = useNavigate();
    return (
        <div className={`MobileNav hidden p-8 bg-[#171717] fixed bottom-0 w-full text-white ${ClassName}`}>
            <ul className='flex w-full flex-row justify-evenly MobileNavPadding'>
                <button onClick={() => Navigate('/Dashboard')} className={`flex flex-col items-center gap-2`}>
                    <FaHouse size={20} />
                    <p className='MobileNavText'>Home</p>
                </button>
                <button onClick={() => Navigate('Attendance')} className={`flex flex-col items-center gap-2`}>
                    <FaFileLines size={20} />
                    <p className='MobileNavText'>Attendance</p>
                </button>
                <button onClick={ () => Navigate('Profile')} className={`flex flex-col items-center gap-2`}>
                    <FaUser size={20} />
                    <p className='MobileNavText'>Profile</p>
                </button>
                <button onClick={() => Navigate('Settings')} className={`flex flex-col items-center gap-2`}>
                    <FaGear size={20} />
                    <p className='MobileNavText'>Settings</p>
                </button>
            </ul>
        </div>
    )
}
export default MobileNav
