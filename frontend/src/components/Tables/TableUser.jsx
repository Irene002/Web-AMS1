import { useEffect, useState } from "react";
import axios from "axios";

const TableUser = () => {

    const Users = [
        {id:'1', nama:'Sean Ishak Adare', jabatan:'Intern', devisi:'Technical Web', status:'On-site', check_in:'08:00 AM', check_out:'05:00 PM', lokasi:'Infinite Learning'},
        {id:'2', nama:'Reggi Saputra Salawangi', jabatan:'Intern', devisi:'Technical Web', status:'On-site', check_in:'08:00 AM', check_out:'05:00 PM', lokasi:'Infinite Learning'},
        {id:'3', nama:'Leo Richardo Alelo', jabatan:'Intern', devisi:'Technical Web', status:'On-site', check_in:'08:00 AM', check_out:'05:00 PM', lokasi:'Infinite Learning'},
        {id:'4', nama:'Firstonly Marshel Naharia', jabatan:'Intern', devisi:'Technical Web', status:'On-site', check_in:'08:00 AM', check_out:'05:00 PM', lokasi:'Infinite Learning'},
    ]

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
                <th>Name</th>
                <th>Role</th>
                <th>Division</th>
                <th>Status</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Location</th>
            </tr>
        </thead>
        <tbody>
            {Users.map((value, index) => (
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
