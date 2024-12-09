import {
    FaCircleQuestion, FaUsers, FaNoteSticky, FaChevronDown, FaGear
} from 'react-icons/fa6'

const SideLinks = [
    {name:'Overview', path:'', iconLeft: <FaCircleQuestion/>},
    {name:'Attendance', path:'Attendance', iconLeft: <FaNoteSticky/>},
    {name:'Users', path:'Users', iconLeft: <FaUsers/>},
    {name:'Settings', path:'Settings', iconLeft: <FaGear/>},

]

export default SideLinks
