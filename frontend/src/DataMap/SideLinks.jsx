import {
    FaCircleQuestion, FaUsers, FaNoteSticky, FaChevronDown, FaGear
} from 'react-icons/fa6'

const SideLinks = [
    {name:'Beranda', path:'', iconLeft: <FaCircleQuestion/>},
    {name:'Absensi', path:'Absensi', iconLeft: <FaNoteSticky/>},
    {name:'Pengguna', path:'Pengguna', iconLeft: <FaUsers/>},
    {name:'Pengaturan', path:'Pengaturan', iconLeft: <FaGear/>},

]

export default SideLinks
