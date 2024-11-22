import TableUser from "../../../components/Tables/TableUser"
import { FaChevronRight } from "react-icons/fa6"

const Pengguna = () => {
    return (
        <div className="FadeInSection">
        <div className="flex flex-row gap-2 items-center mb-4">
                <div className="flex flex-row gap-2 items-center opacity-50">
                    <p>AMS</p>
                    <FaChevronRight size={11} />
                </div>
                <div className="flex flex-row gap-2 items-center opacity-50">
                    <p>Dashboard</p>
                    <FaChevronRight size={11} />
                </div>
                <div>
                    <p className="text-purple-500">Pengguna</p>
                </div>
            </div>
        <h2 className='font-bold'>Pengguna</h2>
        <TableUser/>        
        </div>
    )
}
export default Pengguna
