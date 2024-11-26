import Card2 from "../../../components/Cards/Card2.jsx";

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
            <h2>Pengaturan</h2>
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
