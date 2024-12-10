import { FaDoorOpen } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import LogoIL from '../assets/LogoIL.png'
import { FaChevronDown, FaXmark, FaCircleQuestion, FaUsers, FaNoteSticky, FaGear } from "react-icons/fa6";
import { useState } from "react";

const Sidebar = ({ OnClickBtn }) => {
    
    const SideLinks = [
        { name: 'Overview', path: 'Dashboard', iconLeft: <FaCircleQuestion /> },
        { name: 'Attendance', path: 'Dashboard/Attendance', iconLeft: <FaNoteSticky /> },
        { name: 'Users', path: 'Dashboard/Users', iconLeft: <FaUsers /> },
        { name: 'Settings', path: 'Dashboard/Settings', iconLeft: <FaGear /> },
    ]

    const isLinkActive = (path) => {
        return location.pathname.includes(path);
    };
    
    const location = useLocation();
    const [isVisible, setVisible] = useState(true);
    
    const toggleVisibility = () => {
        setVisible(!isVisible);
    };

    const handleButtonClick = () => {
        const sectionContents = document.querySelector('.ContentSection');
        if (sectionContents) {
            sectionContents.classList.toggle('adjusted');
        }

        const Footer = document.querySelector('.Footer');
        if (Footer) {
            Footer.classList.toggle('adjustedFooter');
        }

        const sidebar = document.querySelector('.Sidebar');
        if (sidebar) {
            sidebar.classList.toggle('Invisible');
        }
    };

    return (
        <div className={`Sidebar bg-black text-white py-8 px-2 flex flex-col gap-2 w-[16rem] h-svh overflow-clip fixed z-20`}>
            <div className='px-4 flex w-[14rem] min-w-[14rem]'>
                <img className='pointer-events-none object-cover w-full h-auto' src={LogoIL} alt="" />
            </div>
            <ul className="flex flex-col items-start gap-2">
                <div className='flex px-2 text-2xl w-full' >
                    <button className='hover:bg-purple-500 p-2 rounded-lg transition-all duration-300' onClick={handleButtonClick}> 
                        <FaXmark /> 
                    </button>
                </div>
                <div className='w-full'>
                    <button 
                        onClick={toggleVisibility} 
                        className='p-4 flex flex-row items-center gap-4 w-full transition-all duration-200 hover:bg-gray-500 hover:rounded-md text-white'
                    >
                        <FaChevronDown /> Dashboard
                    </button>
                    <div className={`overflow-clip w-full ${isVisible ? 'FadeInLink' : 'FadeOutLink'}`}>
                        {SideLinks.map((link, i) => (
                            <Link
                                key={i}
                                to={`/${link.path}`}
                                className={`
                                    p-4 flex flex-row items-center gap-4 w-full transition-all duration-300 
                                    ${isLinkActive(link.path) 
                                        ? 'bg-[#A25BFB] text-white rounded-md' 
                                        : 'hover:bg-purple-950 rounded-md text-gray-300 hover:text-white'}
                                `}
                            >
                                {link.iconLeft} {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </ul>

            <button 
                onClick={OnClickBtn} 
                className='hover:bg-red-950 transition-all duration-200 p-4 rounded-md flex items-center gap-4 w-full'
            > 
                Log Out<span className='text-red-500'><FaDoorOpen /></span>
            </button>
        </div>
    )
}

export default Sidebar