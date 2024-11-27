import {
    FaCircleQuestion, FaUsers, FaNoteSticky, FaChevronDown, FaGear
} from 'react-icons/fa6'

const SideLinks = [
    {name:'Overview', path:'', iconLeft: <FaCircleQuestion/>},
    {name:'Attendance', path:'Absensi', iconLeft: <FaNoteSticky/>},
    {name:'User', path:'Pengguna', iconLeft: <FaUsers/>},
    {name:'Setting', path:'Pengaturan', iconLeft: <FaGear/>},

]

export default SideLinks
