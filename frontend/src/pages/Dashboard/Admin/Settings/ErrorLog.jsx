import { useState } from "react";
import Card2 from "../../../../components/Cards/Card2.jsx";
import { FaChevronRight, FaTrash, FaEye, FaXmark } from 'react-icons/fa6'
import { useNavigate } from "react-router-dom";

const ErrorLog = () => {

    const Navigate = useNavigate();
    const ErrorCard = [
        {
            Title: '1',
            Description: 'The quick brown fox jumps over hte lazy dog.'
        },
        {
            Title: '2.',
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

    const [ErrorLogPop, setErrorLogPop] = useState(false);
    const [ViewError, setViewError] = useState(null);
    const handleOpenErrorLog = (error) => {
        setViewError(error);
        setErrorLogPop(true);
    }
    const handleCloseErrorLog = () => {
        setViewError(null)
        setErrorLogPop(false)
    };

    return (
        <>
            {ErrorLogPop && ViewError && (
                <>
                    <div className="inset-0 z-50 fixed bg-black bg-opacity-20 flex justify-center items-center">
                        <div className="bg-white border-2 border-red-400 rounded-lg w-full max-w-[800px] min-w-[300px] p-8 FadeIn">
                            <div className="flex justify-end">
                                <button onClick={handleCloseErrorLog} className="p-2 text-xl transition-all duration-300 hover:bg-purple-500 hover:text-white rounded-md"><FaXmark /></button>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <p className="font-bold">DATE</p>
                                    <p>Testing</p>
                                </div>
                                <div>
                                    <p className="font-bold">ERROR</p>
                                    <p>{ViewError.Title}</p>
                                </div>
                                <div>
                                    <p className="font-bold">DETAILS</p>
                                    <p>{ViewError.Description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}


            <div className='FadeInSection'>
                <div className="flex flex-row gap-2 items-center mb-4">
                    <div className="flex flex-row gap-2 items-center opacity-50">
                        <button onClick={() => Navigate('/Dashboard')}>Dashboard</button>
                        <FaChevronRight size={11} />
                    </div>
                    <div className="flex flex-row gap-2 items-center opacity-50">
                        <button onClick={() => Navigate('/Dashboard/Settings')}>Settings</button>
                        <FaChevronRight size={11} />
                    </div>
                    <div>
                        <p className="text-purple-500">Error Log</p>
                    </div>
                </div>
                <h2>Error Log</h2>
                <br />

                {/*Wrapper*/}
                <div className='flex flex-col gap-8'>
                    {ErrorCard.map((error, index) => (
                        <div key={index} className={`bg-white shadow-md rounded-md p-8`}>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <p className={`text-red-500 text-lg`}>{error.Title}</p>
                                    <p className={`opacity-70`}>{error.Description}</p>
                                </div>
                                <div className={`flex flex-row gap-4 items-center`}>
                                    <button onClick={() => handleOpenErrorLog(error)}
                                        className={`p-4 rounded-md bg-purple-500 text-white transition-all duration-300 hover:bg-purple-400`}>
                                        <FaEye />
                                    </button>
                                    <button
                                        className={`p-4 rounded-md bg-red-500 text-white transition-all duration-300 hover:bg-red-400`}>
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ErrorLog
