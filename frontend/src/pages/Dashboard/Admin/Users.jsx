import { useState } from "react";
import TableUser from "../../../components/Tables/TableUser"
import { FaChevronRight, FaMagnifyingGlass, FaSort, FaPlus, FaXmark } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { FaChevronDown } from "react-icons/fa6";

const Users = () => {

    const Navigate = useNavigate();

    // Add User Pop Up
    const [AddUser, setAddUser] = useState(false);

    const CloseAddUser = () => {
        setAddUser(false)
    }
    const OpenAddUser = () => {
        setAddUser(true)
    }

    const [refresh, setRefresh] = useState(false);

    // Post Data User

    const [formDataUser, setformDataUser] = useState({
        username: '',
        password: '',
        name: '',
        role: '',
        division: '',
    })

    const handleChangeAddUser = (event) => {
        setformDataUser({
            ...formDataUser, [event.target.name]: event.target.value,
        });
    };

    const [messageSuccess, setMessageSucces] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleSubmitAddUser = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3015/UserAdd', formDataUser);
            if (response.status === 200) {
                console.log(response.data);

                setMessageSucces('User Added successfully.');

                setTimeout(() => {
                    setMessageSucces(false);
                }, 5000);

                setAddUser(false);

                setformDataUser({
                    username: '',
                    password: '',
                    name: '',
                    role: '',
                    division: '',
                });

                setRefresh((prev) => !prev);

            } else {
                setMessageError('Failed to add user')

                setTimeout(() => {
                    setMessageError(false)
                }, 10000);
            };

        } catch (error) {
            console.error('Error Adding User');
        };

    }


    return (
        <>
            {AddUser && (
                <div className="inset-0 bg-black bg-opacity-30 fixed flex justify-center items-center z-50">
                    <div className="FadeIn bg-white rounded-md p-8 w-full max-w-[500px] min-w-[400px]">
                        <div className="flex justify-end">
                            <button onClick={CloseAddUser} className="p-2 transition-all duration-300 rounded-md hover:bg-purple-500 hover:text-white">
                                <FaXmark />
                            </button>
                        </div>
                        <div>
                            <h4>Add User</h4>
                        </div>
                        <br />

                        <div>
                            {messageError && <p className="text-red-500">{messageError}</p>}
                            <form onSubmit={handleSubmitAddUser} className="flex flex-col gap-6">
                                <input autoComplete="off" required className="p-4 rounded-md border-black border" type="text" placeholder="Username" name="username" value={formDataUser.username} onChange={handleChangeAddUser} />
                                <input autoComplete="off" required className="p-4 rounded-md border-black border" type="password" placeholder="Password" name="password" value={formDataUser.password}
                                    onChange={handleChangeAddUser}
                                    minLength={'8'} />
                                <input autoComplete="off" required className="p-4 rounded-md border-black border" type="text" placeholder="Name" name="name" value={formDataUser.name}
                                    pattern="^[a-zA-Z\s]*$"
                                    maxLength={'60'}
                                    onChange={handleChangeAddUser} />

                                {/* ROLE */}

                                <div className="relative w-full">
                                    <select required className=" cursor-pointer p-4 rounded-md border-black border appearance-none w-full focus:outline-none" name="role" value={formDataUser.role} onChange={handleChangeAddUser}>
                                        <option value="" disabled>
                                            Select Role
                                        </option>
                                        <option value="Mentor">Mentor</option>
                                        <option value="Mentee">Mentee</option>
                                        <option value="Intern">Intern</option>
                                    </select>
                                    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                        <FaChevronDown />
                                    </span>
                                </div>

                                {/* Division */}

                                <div className="relative w-full">
                                    <select required className=" cursor-pointer p-4 rounded-md border-black border appearance-none w-full focus:outline-none" name="division" value={formDataUser.division} onChange={handleChangeAddUser}>
                                        <option value="" disabled>
                                            Select Division
                                        </option>
                                        <option value="Technical Web Developer">Technical Web Developer</option>
                                        <option value="Game Developer">Game Developer</option>
                                        <option value="Mobile Developer">Mobile Developer</option>
                                        <option value="UI/UX Designer">UI/UX Designer</option>
                                        <option value="Hybrid Cloud">Hybrid Cloud</option>
                                        <option value="Research & Development">Research & Development</option>
                                        <option value="IBM: Advanced AI">IBM: Advanced AI</option>
                                        <option value="Student Relation & Administration">Student Relation & Administration</option>
                                        <option value="Event & Community">Event & Community</option>
                                    </select>
                                    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                        <FaChevronDown />
                                    </span>
                                </div>

                                <div className="flex flex-row gap-4 justify-end">
                                    <button onClick={CloseAddUser} className="p-4 rounded-md bg-gray-200 transition-all duration-300 hover:bg-gray-300 ">Cancel</button>
                                    <button type="submit" className="text-white p-4 rounded-md bg-purple-500 transition-all duration-300 hover:bg-purple-600 ">Add Data</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            )}


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
                <div className="flex flex-row justify-between PenggunaAct mb-8">
                    <div className="border-solid border border-black w-full max-w-[300px] min-w-[200px] flex flex-row gap-4 items-center p-2 rounded-md">
                        <button>
                            <FaMagnifyingGlass />
                        </button>
                        <input type="text" placeholder="Cari..." className="focus:outline-off" />
                    </div>

                    <div className="flex flex-row gap-4">
                        <button onClick={OpenAddUser} className="flex flex-row gap-2 bg-green-400 text-white hover:bg-green-500 duration-300 transition-all items-center p-2 rounded-md">
                            <FaPlus />
                            Add Data
                        </button>

                        <button className="flex flex-row gap-2 items-center p-2 border border-solid border-black rounded-md">
                            <FaSort />
                            Filter
                        </button>
                    </div>

                </div>
                {messageSuccess && <p className="text-green-500 mb-4">{messageSuccess}</p>}
                <div className="flex overflow-x-scroll">
                    <TableUser refresh={refresh} />
                </div>
            </div>
        </>

    )
}
export default Users
