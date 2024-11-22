import { Routes, Route } from "react-router-dom";
import Home from "../pages/Dashboard/Admin/Home.jsx";
import About from "../pages/Dashboard/Admin/About.jsx";
import Absensi from "../pages/Dashboard/Admin/Absensi.jsx";
import Pengguna from "../pages/Dashboard/Admin/Pengguna.jsx";
import Pengaturan from "../pages/Dashboard/Admin/Pengaturan.jsx";
import Profile from "../pages/Dashboard/Admin/Profile.jsx";
import UsersAttendance from '../pages/Dashboard/Admin/UsersAttendance.jsx'
import ActivityLog from "../pages/Dashboard/Admin/ActivityLog.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import LoginPage from '../pages/Login/LoginPage.jsx'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route path="/Dashboard" element={<Dashboard/>}>
            <Route index element={<Home/>} />
                {/* ABSENSI */}
                <Route path="Absensi" element={<Absensi />}>
                    <Route index element={<UsersAttendance />} />
                    <Route path="Activity" element={<ActivityLog />} />
                </Route>
                <Route path="Pengguna" element={<Pengguna />} />
                <Route path="Pengaturan" element={<Pengaturan />} />
                <Route path="Profile" element={<Profile />} />
            </Route>


        </Routes>
    )
}
export default Routing
