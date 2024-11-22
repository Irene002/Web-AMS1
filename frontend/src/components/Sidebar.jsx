import {FaDoorOpen} from 'react-icons/fa6'
import {Link, useNavigate} from 'react-router-dom'
import LogoIL from '../assets/LogoIL.png'

import {FaChevronDown, FaXmark} from "react-icons/fa6";

import SideLinks from '../DataMap/SideLinks.jsx'
import {useState} from "react";

const Sidebar = () => {
    const [isVisible, setVisible] = useState(true);
    const toggleVisibility = () => {
        setVisible(!isVisible);
    };

    const handleButtonClick = () => {
        const sectionContents = document.querySelector('.ContentSection');
        if (sectionContents) {
            sectionContents.classList.toggle('adjusted');
            console.log(
                'SectionContents class toggled:',
                sectionContents.classList.contains('adjusted')
            );
        }

        const Footer = document.querySelector('.Footer');
        if (Footer) {
            Footer.classList.toggle('adjustedFooter');
            console.log('SectionContents class toggled:', Footer.classList.contains('adjusted')
            );
        }

        const sidebar = document.querySelector('.Sidebar');
        if (sidebar) {
            sidebar.classList.toggle('Invisible');
            console.log('Sidebar visibility toggled:', sidebar.classList.contains('Invisible'));
        }
    };

    const Navigate = useNavigate();


    return (
        <div className={`Sidebar bg-black text-white py-8 px-2 flex flex-col gap-2 w-[16rem] h-svh overflow-clip fixed z-20`}>
            <div className='px-4 flex w-[14rem] min-w-[14rem]'>
                <img className='pointer-events-none object-cover w-full h-auto' src={LogoIL} alt=""/>
            </div>
            <ul className="flex flex-col items-start gap-2">
                <div className='flex px-2 text-2xl w-full' >
                <button className='hover:bg-purple-500 p-2 rounded-lg transition-all duration-300' onClick={handleButtonClick}> <FaXmark/> </button>
                </div>
                <div className='w-full'>
                <button onClick={toggleVisibility} className='p-4 flex flex-row items-center gap-4 w-full transition-all duration-200 hover:bg-gray-500 hover:rounded-md text-white'>
                    <FaChevronDown/> Dashboard
                </button>
                <div className={`overflow-clip w-full ${isVisible ? 'FadeInLink' : 'FadeOutLink'}`}>
                {SideLinks.map((link) => (
                    
                    <Link
                        className={`p-4 flex flex-row items-center gap-4 w-full transition-all duration-200 hover:bg-[#A25BFB] hover:rounded-md text-white`}
                        to={link.path}>
                        {link.iconLeft} {link.name}
                        <button>
                        {link.iconRight}
                        </button>
                    </Link>
                    
                ))}
                </div>
                </div>
            </ul>
                <button onClick={() => Navigate('/')} className=' hover:bg-red-950 transition-all duration-200 p-4 rounded-md flex items-center gap-4 w-full'> Logout <span className='text-red-500'><FaDoorOpen/></span></button>
        </div>
    )
}
export default Sidebar
