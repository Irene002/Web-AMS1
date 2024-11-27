import TableUser from "../../../components/Tables/TableUser"
import PageBtn from "../../../components/Button/PageBtn"

import { FaMagnifyingGlass, FaSort } from "react-icons/fa6"

import { useState, useEffect } from "react"

import axios from "axios"

const UsersAttendance = () => {

    const [user, setUser]= useState([]);

    
    const getData = async ()=>{
        try{
            const result = await axios.get(`http://localhost:3015/checkins`)
        setUser(result.data.data);
        }catch(error){
            console.log(error)
        }
    }
    
    const postData = async ()=>{
        await axios.post(`http://localhost:3015/checkins`, [name, jabatan, devisi, status, check_in, check_out, lokasi])
        
    }
    
        useEffect(()=>{
            getData()
        }, [])


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
                    
                    {user.map((value, index) => (
                        <TableUser
                        key={index}
                        nomor={index+1}
                        nama={value.name}
                        jabatan={value.jabatan}
                        divisi={value.devisi}
                        status={value.status}
                        jamMasuk={value.check_in}
                        jamKeluar={value.check_out}
                        Lokasi={value.lokasi}
                        />
                    ))}

                </div>
                <PageBtn />
            </div>

        </>
    )
}

export default UsersAttendance