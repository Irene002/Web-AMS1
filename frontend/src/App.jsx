import axios from 'axios'
import Routing from './routes/index.jsx'
import { useEffect, useState } from 'react';




const App = () => {
    const [user, setUser]= useState([]);
    const [refresh, setRefresh]= useState(false);

    
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
    }, [refresh])
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>no</th>
                    <th>nama</th>
                    <th>jabatan</th>
                </tr>
            </thead>
            <tbody>
                {user.map((value,index)=>{
                    return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{value.nama}</td>
                        <td>{value.jabatan}</td>
                        <td><button onClick={hapus(value.id)}>hapus</button></td>
                    </tr>
                })}
            </tbody>
        </table>
        {/* <Routing/> */}

        </>
    )
}
export default App
