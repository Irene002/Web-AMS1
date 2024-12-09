import { Outlet, useNavigate } from "react-router-dom"
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import MobileNav from '../components/MobileNav.jsx'
import { useState } from "react";
import { FaDoorOpen } from "react-icons/fa6";

const Dashboard = () => {

        const [isOpen, setIsOpen] = useState(false);

        const Navigate = useNavigate();

        const handleLogoutButton = () => {
            setIsOpen(false);
            Navigate('/')
        };

    return (
        <main className='flex flex-row w-full'>
            <Sidebar 
            OnClickBtn={() => setIsOpen(true)}
            />
            <div className='w-full h-fit relative'>
                <Navbar />
                <section className={`ContentMain`}>
                    {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="rounded-xl bg-white p-6 w-full max-w-[500px] min-w-[200px] FadeIn">
                            <div>
                            <h4 className="flex items-center flex-row gap-2 mb-2">Confirm Logout <FaDoorOpen size={25}/></h4>
                            <p>Are you sure you want to logout?</p>
                            </div>
                            <div className="flex flex-row gap-4 justify-end mt-8">
                            <button onClick={() => setIsOpen(false)} className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300">Cancel</button>
                            <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 p-4 rounded-md text-white" onClick={handleLogoutButton}>Logout</button>
                            </div>
                        </div>
                    </div>
                    )};
                    <div className='ContentSection px-[10rem] ml-48 mt-36 py-8 pb-28 transition-all duration-500'>
                        <Outlet />
                    </div>
                    <Footer />
                </section>
                <MobileNav />
            </div>
        </main>
    )
}

export default Dashboard