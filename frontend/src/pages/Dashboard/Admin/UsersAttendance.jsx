import TableUser from "../../../components/Tables/TableUser"
import PageBtn from "../../../components/Button/PageBtn"

import { FaMagnifyingGlass, FaSort } from "react-icons/fa6"

import { useState, useEffect } from "react"

import axios from "axios"

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

                <div>
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