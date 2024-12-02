import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import MobileNav from '../components/MobileNav.jsx'
const Dashboard = () => {
    return (
        <main className='flex flex-row w-full'>
            <Sidebar />
            <div className='w-full h-fit relative'>
                <Navbar />
                <section className={`ContentMain`}>
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