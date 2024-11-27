import axios from 'axios'
import Routing from './routes/index.jsx'
import { useEffect, useState } from 'react';




const App = () => {


    return (
        <>
        {/* <table>
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
        </table> */}

        <Routing/>

        </>
    )
}
export default App
