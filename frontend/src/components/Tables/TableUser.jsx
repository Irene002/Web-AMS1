import { useEffect, useState } from "react";
import axios from "axios";

const TableUser = () => {

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
    <table className="w-full mt-8">
        <thead>
            <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Jabatan</th>
                <th>Divisi</th>
                <th>Status</th>
                <th>Jam Masuk</th>
                <th>Jam Keluar</th>
                <th>Lokasi</th>
            </tr>
        </thead>
        <tbody>
            {user.map((value, index) => (
            <tr key={index}>
                <td>{value.id}</td>
                <td>{value.nama}</td>
                <td>{value.jabatan}</td>
                <td>{value.devisi}</td>
                <td>{value.status}</td>
                <td>{value.check_in}</td>
                <td>{value.check_out}</td>
                <td>{value.lokasi}</td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default TableUser
