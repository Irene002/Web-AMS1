import logo1 from '../../assets/test.png'
import {FaChevronRight} from 'react-icons/fa6'

const CardTableList = () => {

    const listCardTable = [
        {name:'Sean Ishak Adare', role: 'Intern'},
        {name:'Reggi Saputra Salawangi', role: 'Intern'},
        {name:'Leo Richardo Alelo', role: 'Intern'},
        {name:'Firstonly Marshel Naharia', role: 'Intern'},
    ]

    return (
        <>
        {listCardTable.map((value,index) => (
        <div className={`w-full shadow-md p-8 flex flex-row items-center rounded-md justify-between`} key={index}>
            <div className="flex flex-row items-center gap-8">
                <img className={`w-[5rem] h-[5rem] rounded-full border-2 border-solid border-purple-500`} src={value.profilImage} alt=""/>
               <div className="flex flex-col gap">
                   <p className={`font-bold`}>{value.name}</p>
                   <p className={`opacity-60`}>{value.role}</p>
               </div>
            </div>
            <button className={`p-4 rounded-full hover:bg-gray-200 transition-all duration-300`}><FaChevronRight/></button>
        </div>
            ))}
        </>
    )
}
export default CardTableList
