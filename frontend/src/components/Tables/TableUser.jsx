import { useEffect, useState } from "react";
import axios from "axios";

import { FaPenToSquare, FaSquareMinus } from "react-icons/fa6";

const TableUser = ({refresh}) => {


    const [AttendanceData, SetAttendanceData] = useState([]);
    const [error, Seterror] = useState('');

    const getAttendanceData = async () => {
        try {
            const response = await axios.get('http://localhost:3015/UserGet');
            SetAttendanceData(response.data.data)
            console.log(response.data.data)
        } catch (err)  {
            console.error(err);
            Seterror('Failed to get Data.')
        }
    }

    useEffect(() => {
        getAttendanceData();
    }, [refresh])

    return (
        <>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Division</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {AttendanceData.map((value, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{value.username}</td>
                            <td>{value.name}</td>
                            <td>{value.role}</td>
                            <td>{value.division}</td>
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
