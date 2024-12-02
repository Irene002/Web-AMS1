import TableUser from "../../../components/Tables/TableUser"
import PageBtn from "../../../components/Button/PageBtn"

import { FaMagnifyingGlass, FaSort, FaPlus } from "react-icons/fa6"
import ButtonMisc from "../../../components/Button/ButtonMisc"

const UsersAttendance = () => {


    return (
        <>
            <div className="flex flex-row justify-between items-center mt-8">
                <div className="border-solid border border-black w-full max-w-[300px] min-w-[200px] flex flex-row gap-4 items-center p-2 rounded-md">
                    <button>
                        <FaMagnifyingGlass />
                    </button>
                    <input type="text" placeholder="Cari..." className="focus:outline-none" />
                </div>

                <div className="flex flex-row gap-4">
                    {/* <ButtonMisc
                    BtnLabel={'Add Data'}
                    Class={'bg-green-400 p-2 text-white hover:bg-green-500 duration-300 transition-all'}
                    ></ButtonMisc> */}

                    <button className="flex flex-row gap-2 bg-green-400 text-white hover:bg-green-500 duration-300 transition-all items-center p-2 rounded-md">
                        <FaPlus/>
                        Add Data
                    </button>

                    <button className="flex flex-row gap-2 items-center p-2 border border-solid border-black rounded-md">
                        <FaSort />
                        Filter
                    </button>
                </div>
            </div>

            <div>
                <div className="TableUser flex md:overflow-x-scroll sm:overflow-x-scroll lg:overflow-x-hidden xl:overflow-hidden">
                        <TableUser
                        />

                </div>
                <PageBtn />
            </div>

        </>
    )
}

export default UsersAttendance