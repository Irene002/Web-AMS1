import { useState } from "react";
import { FaCircleExclamation, FaChevronRight, FaXmark } from "react-icons/fa6"
import { useNavigate, Outlet } from "react-router-dom"

const Attendance = () => {
    const Navigate = useNavigate();

    const [AddData, setAddData] = useState(false);

    const hanldeOpenAddData = () => {
        setAddData(true)
    }
    const hanldeCloseAddData = () => {
        setAddData(false)
    }

    return (

        <>

        {AddData && (
            <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50'>
                <div className='bg-white p-8 rounded-lg w-full max-w-[600px] min-w-[400px] FadeIn'>
                    <div className='flex justify-end'>
                        <button onClick={hanldeCloseAddData} className='text-xl p-2 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-lg'><FaXmark /></button>
                    </div>
                    <h4>Add Data</h4>
                    <div className='mt-4'>
                        <p>Input Data Attendance</p>
                        <div className='flex flex-col gap-4 mt-4'>
                            <input className="border p-4 border-black" type="text" name="name" placeholder="Name" />
                            <input className="border p-4 border-black" type="text" name="role" placeholder="Role" />
                            <input className="p-4 border border-black" type="text" name="division" placeholder="Division" />
                            <input className="p-4 border border-black" type="text" name="status" placeholder="Status" />
                        </div>
                    </div>
                    <form className='mt-8 flex flex-col gap-4'>
                        <label htmlFor="description">Description (Optional)</label>
                        <textarea className='border h-[10rem] resize-none border-solid border-black p-4 focus:outline-none' name="description" id="descriptionCheck" placeholder='Write Description...'></textarea>
                    </form>
                    <div className='flex flex-row gap-4 justify-end mt-8'>
                        <button onClick={hanldeCloseAddData} className='p-4 rounded-md bg-gray-100 transition-all duration-300 hover:bg-gray-200'>Cancel</button>
                        <button onClick={''} className='p-4 rounded-md bg-purple-500 text-white transition-all duration-300 hover:bg-purple-600'>Check In</button>
                    </div>
                </div>
            </div>
        )}



            <div className="FadeInSection">
                <div className="flex flex-row gap-2 items-center mb-4">
                    <div className="flex flex-row gap-2 items-center opacity-50">
                        <button onClick={() => Navigate('/Dashboard')}>Dashboard</button>
                        <FaChevronRight size={11} />
                    </div>
                    <div>
                        <p className="text-purple-500">Attendance</p>
                    </div>
                </div>

                <h2>Attendance</h2>
                <div className="flex flex-row justify-between border-b border-solid border-black mt-8">
                    <div className="flex flex-row gap-12">
                        <button onClick={() => Navigate('')} className="py-2 border-solid border-b-2 border-purple-500 items-center text-purple-500">
                            <p>Pengguna</p>
                        </button>
                        <button onClick={() => Navigate('Activity')} className="py-2 flex flex-row gap-3 items-center">
                            <p className="opacity-50">Activity Log</p>
                            <FaCircleExclamation color="red" />
                        </button>
                    </div>
                </div>
                <div>
                    <Outlet context={{hanldeOpenAddData}} />
                </div>

            </div>
        </>

    )
}
export default Attendance
