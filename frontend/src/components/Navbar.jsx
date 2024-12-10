import logo1 from '../assets/test.png'
import logo2 from '../assets/LogoIL.png'
import { FaChevronDown, FaComment, FaBell, FaBars } from 'react-icons/fa6'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        const sectionContents = document.querySelector('.ContentSection');
        if (sectionContents) {
            setTimeout(() => {
                sectionContents.classList.toggle('adjusted');
                console.log(
                    'SectionContents class toggled:',
                    sectionContents.classList.contains('adjusted')
                );
            }, 100);
        }

        const Footer = document.querySelector('.Footer');
        if (Footer) {
            setTimeout(() => {
                Footer.classList.toggle('adjustedFooter');
                console.log('SectionContents class toggled:', Footer.classList.contains('adjusted')
                );
            }, 100)
        }

        const sidebar = document.querySelector('.Sidebar');
        if (sidebar) {
            sidebar.classList.toggle('Invisible');
            console.log('Sidebar visibility toggled:', sidebar.classList.contains('Invisible'));
        }
    };

    return (
        <nav className="bg-black flex justify-between p-8 text-white fixed w-full z-10 Navbar">
            <button className={`menuSidebar`}>
                <FaBars onClick={handleButtonClick} />
            </button>
            <div className='flex items-center gap-12 NavItems'>
                <div className='flex flex-row items-center gap-8'>
                    <button> <FaBell /> </button>
                    <button> <FaComment /> </button>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    Sean Ishak Adare
                    <button onClick={() => navigate('Settings/Profile')} className='bg-green-600 border-solid border-[#A25BFB] border-2 flex w-12 h-12 overflow-clip rounded-full'>
                        <img className='pointer-events-none w-full h-auto' src={logo1} alt="User-Image" />
                    </button>
                    <button>
                        <FaChevronDown />
                    </button>
                </div>
            </div>
            <div className={`NavLogo hidden w-[13rem] h-auto`}>
                <img src={logo2} alt="InfiniteLearningLogo" />
            </div>
        </nav>
    )
}
export default Navbar
