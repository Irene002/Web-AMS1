import TableUser from "../../../components/Tables/TableUser"
import { FaChevronRight } from "react-icons/fa6"

import { useNavigate } from "react-router-dom"

const Pengguna = () => {

    const Navigate = useNavigate(); 

    return (
        <div className="FadeInSection">
        <div className="flex flex-row gap-2 items-center mb-4">
                <button onClick={() => Navigate('/Dashboard')} className="flex flex-row gap-2 items-center opacity-50">
                    <p>Dashboard</p>
                    <FaChevronRight size={11} />
                </button>
                <div>
                    <p className="text-purple-500">Users</p>
                </div>
            </div>
        <h2 className='font-bold'>Pengguna</h2>
        <TableUser/>        
        </div>
    )
}
export default Pengguna
