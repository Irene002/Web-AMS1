import { Routes, Route } from "react-router-dom";
import LoginPage from '../pages/Login/LoginPage.jsx';
import Dashboard from "../pages/Dashboard.jsx";
import Home from "../pages/Dashboard/Admin/Home.jsx";
import About from "../pages/Dashboard/Admin/About.jsx";
import Attendance from "../pages/Dashboard/Admin/Attendance.jsx";
import Users from "../pages/Dashboard/Admin/Users.jsx";
import UsersAttendance from '../pages/Dashboard/Admin/UsersAttendance.jsx';
import Settings from "../pages/Dashboard/Admin/Settings/Settings.jsx";
import Profile from "../pages/Dashboard/Admin/Profile.jsx";
import ActivityLog from "../pages/Dashboard/Admin/ActivityLog.jsx";
import ErrorLog from "../pages/Dashboard/Admin/Settings/ErrorLog.jsx";
import PrivateRoute from "../components/utils/PrivateRoute.jsx";

const Routing = () => {
    return (
        <Routes>
            {/* Login route */}
            <Route path="/" element={<LoginPage />} />

            {/* Protected routes */}
            <Route element={<PrivateRoute />}>
                <Route path="/Dashboard" element={<Dashboard />}>
                    <Route index element={<Home />} />
                    <Route path="Attendance" element={<Attendance />}>
                        <Route index element={<UsersAttendance />} />
                        <Route path="Activity" element={<ActivityLog />} />
                    </Route>
                    <Route path="Users" element={<Users />} />
                    <Route path="Settings" element={<Settings />} />
                    <Route path="Settings/ErrorLog" element={<ErrorLog />} />
                    <Route path="Settings/Profile" element={<Profile />} />
                    <Route path="About" element={<About />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Routing;
