import Card2 from "../../../../components/Cards/Card2.jsx";
import { FaChevronRight } from 'react-icons/fa6'
import { useNavigate } from "react-router-dom";

const Settings = () => {

    const Navigate = useNavigate();

    const SettingsCard = [
        { Title: 'Duration Language', Description: 'Set your prefered language.', ButtonClass: 'p-4 bg-purple-500 text-white rounded-md shadow-sm hover:bg-purple-600 transition-all duration-300', Button: 'English', Onclick: '' },
        { Title: 'Date Format', Description: 'Preview: 11/12/2024', ButtonClass: 'p-4 bg-purple-500 text-white hover:bg-purple-600 transition-all duration-500 rounded-md', Button: 'Edit Time', Onclick: '' },
        { Title: 'Error Log', Description: `If there's any problem within the system, it will all be stored in here.`, ButtonClass: 'hover:bg-gray-100 transition-all duration-500 p-4 rounded-full', Button: <FaChevronRight />, Onclick: () => Navigate('ErrorLog') },
    ]

    return (
        <div className='FadeInSection'>
            <div className="flex flex-row gap-2 items-center mb-4">
                <div className="flex flex-row gap-2 items-center opacity-50">
                    <button onClick={() => Navigate('/Dashboard')}>Dashboard</button>
                    <FaChevronRight size={11} />
                </div>
                <div>
                    <p className="text-purple-500">Settings</p>
                </div>
            </div>
            <h2>Settings</h2>
            <br />
            <div className='flex flex-col gap-8'>
                {SettingsCard.map((card, index) => (
                    <Card2
                        key={index}
                        Title={card.Title}
                        Description={card.Description}
                        Button={card.Button}
                        OnClick={card.Onclick}
                        ButtonClass={card.ButtonClass}
                    />
                ))}
            </div>
        </div>
    )
}
export default Settings
