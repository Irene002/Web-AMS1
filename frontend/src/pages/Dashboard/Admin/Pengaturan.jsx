import Card2 from "../../../components/Cards/Card2.jsx";
import {FaChevronRight} from 'react-icons/fa6'

const Pengaturan = () => {

    const SettingsCard = [
        {Title:'Duration Language', Description:'Set your prefered language.', Button:'This is an example button'},
        {Title:'Date Format', Description:'Preview: 11/12/2024', Button:'This is an example button'},
        {Title:'Error Log', Description:`If there's any problem within the system, it will all be stored in here.`, Button:'This is an example button'},
        {Title:'Duration Language', Description:'Set your prefered language.', Button:'This is an example button'},
        {Title:'Duration Language', Description:'Set your prefered language.', Button:'This is an example button'},
    ]

    return (
        <div className='FadeInSection'>
             <div className="flex flex-row gap-2 items-center mb-4">
                <div className="flex flex-row gap-2 items-center opacity-50">
                    <button onClick={() => Navigate('/')}>Dasbor</button>
                    <FaChevronRight size={11} />
                </div>
                <div>
                    <p className="text-purple-500">Settings</p>
                </div>
            </div>
            <h2>Settings</h2>
            <br/>
            <div className='flex flex-col gap-8'>
                {SettingsCard.map((card, index) => (
                    <Card2
                        key={index}
                        Title={card.Title}
                        Description={card.Description}
                        Button={card.Button}
                    />
                ))}
            </div>
        </div>
    )
}
export default Pengaturan
