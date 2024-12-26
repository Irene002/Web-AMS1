import { FaGear, FaHouse, FaFileLines, FaUser, FaRightFromBracket } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const MobileNav = ({ ClassName }) => {

    const Navigate = useNavigate();
    
    // Logout Function Button
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        setIsOpen(true);
    }

    const CloseLogout = () => {
        setIsOpen(false);
    }
    
    return (
        <>
            {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="rounded-xl bg-white p-6 w-full max-w-[500px] min-w-[200px] MobilePopLogout FadeIn">
                    <div>
                        <h4 className="flex items-center flex-row gap-2 mb-2 text-[1.2rem]">Confirm Logout <FaRightFromBracket size={0} /></h4>
                        <p>Are you sure you want to logout?</p>
                    </div>
                    <div className="flex flex-row gap-4 justify-end mt-8">
                        <button onClick={CloseLogout} className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300">Cancel</button>
                        <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 p-4 rounded-md text-white" onClick={''}>Logout</button>
                    </div>
                </div>
            </div>
            )}

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
                    <button onClick={() => Navigate('Settings/Profile')} className={`flex flex-col items-center gap-2`}>
                        <FaUser size={20} />
                        <p className='MobileNavText'>Profile</p>
                    </button>
                    <button onClick={() => Navigate('Settings')} className={`flex flex-col items-center gap-2`}>
                        <FaGear size={20} />
                        <p className='MobileNavText'>Settings</p>
                    </button>
                    <button onClick={handleLogout} className={`flex flex-col items-center gap-2 text-red-500`}>
                        <FaRightFromBracket size={20} />
                        <p className='MobileNavText'>Logout</p>
                    </button>
                </ul>
            </div>
        </>
    )
}
export default MobileNav
