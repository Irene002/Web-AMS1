import Card2 from "../../../../components/Cards/Card2.jsx";
import {FaChevronRight, FaTrash, FaEye} from 'react-icons/fa6'
import {useNavigate} from "react-router-dom";

const ErrorLog = () => {

    const ErrorCard = [
        {
            Title: 'The quick brown fox jumps over the lazy dog.',
            Description: 'The quick brown fox jumps over hte lazy dog.'
        },
        {
            Title: 'The quick brown fox jumps over the lazy dog.',
            Description: 'The quick brown fox jumps over hte lazy dog.'
        },
        {
            Title: 'The quick brown fox jumps over the lazy dog.',
            Description: 'The quick brown fox jumps over hte lazy dog.'
        },
        {
            Title: 'The quick brown fox jumps over the lazy dog.',
            Description: 'The quick brown fox jumps over hte lazy dog.'
        },
        {
            Title: 'The quick brown fox jumps over the lazy dog.',
            Description: 'The quick brown fox jumps over hte lazy dog.'
        },
    ]

    const Navigate = useNavigate();

    return (
        <div className='FadeInSection'>
            <div className="flex flex-row gap-2 items-center mb-4">
                <div className="flex flex-row gap-2 items-center opacity-50">
                    <button onClick={() => Navigate('/Dashboard')}>Dashboard</button>
                    <FaChevronRight size={11}/>
                </div>
                <div className="flex flex-row gap-2 items-center opacity-50">
                    <button onClick={() => Navigate('/Dashboard/Settings')}>Settings</button>
                    <FaChevronRight size={11}/>
                </div>
                <div>
                    <p className="text-purple-500">Error Log</p>
                </div>
            </div>
            <h2>Error Log</h2>
            <br/>
            {/*Wrapper*/}
            <div className='flex flex-col gap-8'>
                {ErrorCard.map((Error, index) => (
                    <div key={index} className={`bg-white shadow-md rounded-md p-8`}>
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <p className={`text-red-500 text-lg`}>{Error.Title}</p>
                                <p className={`opacity-70`}>{Error.Description}</p>
                            </div>
                            <div className={`flex flex-row gap-4 items-center`}>
                                <button
                                    className={`p-4 rounded-md bg-purple-500 text-white transition-all duration-300 hover:bg-purple-400`}>
                                    <FaEye/></button>
                                <button
                                    className={`p-4 rounded-md bg-red-500 text-white transition-all duration-300 hover:bg-red-400`}>
                                    <FaTrash/></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ErrorLog
