import Card1 from '../../../components/Cards/Card1.jsx'
import CardData1 from '../../../DataMap/CardData1.jsx'
import CardCheckAttendance from '../../../components/Cards/CardCheckAttendance.jsx'
import CardTableHistoryAttendance from '../../../components/Cards/CardTableHistoryAttendance.jsx'
import CardTableList from '../../../components/Cards/CardTableList.jsx'

const Home = () => {

    return (
        <div className={`FadeInSection`}>
            <h2 className='font-bold'>Welcome <span className='GradientFont'>Sean Ishak Adare</span> ,</h2>
                <h4>Find commonly used pages below.</h4>
            <hr className='mb-8 mt-4' />
            <div className={`flex flex-col gap-8`}>
                <CardCheckAttendance/>
                <div className={`flex flex-col gap-4`}>
                    <div className={`flex flex-col gap-2`}>
                        <p className={`font-bold opacity-70 text-[1.2rem]`}>Riwayat Absensi (Users)</p>
                        <p className={`text-purple-500`}>Minggu 1, 27 Oktober 2024 <span className={`text-black`}>- Automatically resets every 7 days. </span></p>
                    </div>
                    <CardTableList/>
                </div>
                <div className='grid xl:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
                    {CardData1.map((card, index) => (
                        <Card1
                            key={index}
                            Title={card.title}
                            TitleIcon={card.icon}
                            Description={card.description}
                            ButtonLabel={card.BtnLabel}
                            Path={card.path}
                        />

                ))}
            </div>
            <div className={`flex flex-col gap-4`}>
                <div className={`flex flex-col gap-2`}>
                    <p className={`font-bold opacity-70 text-[1.2rem]`}>Riwayat Absensi</p>
                    <p className={`text-purple-500`}>Minggu 1, 27 Oktober 2024 <span className={`text-black`}>- Automatically resets every 7 days. </span></p>
                </div>

                <CardTableHistoryAttendance
                
                />


                </div>
            </div>

        </div>
    )
}
export default Home
