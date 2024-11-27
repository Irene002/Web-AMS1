import { FaCircleExclamation, FaChevronRight} from "react-icons/fa6"
import { useNavigate, Outlet} from "react-router-dom"

const Absensi = () => {
    const Navigate = useNavigate();

    return (
        <div className="FadeInSection">
            <div className="flex flex-row gap-2 items-center mb-4">
                <div className="flex flex-row gap-2 items-center opacity-50">
                    <button onClick={() => Navigate('/')}>Dasboard</button>
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
            <Outlet/>
            </div>

        </div>
    )
}
export default Absensi
