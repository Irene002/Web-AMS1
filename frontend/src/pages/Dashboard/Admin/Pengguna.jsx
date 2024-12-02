import TableUser from "../../../components/Tables/TableUser"
import { FaChevronRight, FaMagnifyingGlass, FaSort, FaPlus } from "react-icons/fa6"

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
            <h2 className='font-bold mb-4'>Users</h2>
            <div className="flex flex-row justify-between">
                <div className="border-solid border border-black w-full max-w-[300px] min-w-[200px] flex flex-row gap-4 items-center p-2 rounded-md">
                    <button>
                        <FaMagnifyingGlass />
                    </button>
                    <input type="text" placeholder="Cari..." className="focus:outline-none" />
                </div>

                <div className="flex flex-row gap-4">
                <button className="flex flex-row gap-2 bg-green-400 text-white hover:bg-green-500 duration-300 transition-all items-center p-2 rounded-md">
                    <FaPlus />
                    Add Data
                </button>

                <button className="flex flex-row gap-2 items-center p-2 border border-solid border-black rounded-md">
                    <FaSort />
                    Filter
                </button>
                </div>

            </div>

            <TableUser />
        </div>
    )
}
export default Pengguna
