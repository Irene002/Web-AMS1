import { useEffect, useState } from "react";
import axios from "axios";

import { FaPenToSquare, FaSquareMinus } from "react-icons/fa6";

const TableUser = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await axios.get(`http://localhost:3015/checkins`)
                
                
                setUser(result.data.data);
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    return (
        <>
            <table className="w-full mt-8">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Division</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((value, index) => (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.username}</td>
                            <td>{value.jabatan}</td>
                            <td>{value.devisi}</td>
                            <td>{value.status}</td>
                            <td>{value.date}</td>
                            <td>{value.check_in}</td>
                            <td>{value.check_out}</td>
                            <td>{value.lokasi}</td>
                            <td>
                                <div className="flex flex-row items-center gap-4">
                                    <button className=""><FaPenToSquare size={25} /></button>
                                    <button className="text-red-500"><FaSquareMinus size={25} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TableUser
