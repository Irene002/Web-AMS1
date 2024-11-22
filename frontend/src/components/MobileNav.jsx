import {FaGear} from 'react-icons/fa6'

const MobileNav = ({ClassName}) => {
    return (
        <div className={`MobileNav hidden p-8 bg-[#171717] fixed bottom-0 w-full text-white ${ClassName}`}>
            <ul>
                <div className={`flex flex-col items-center gap-2`}>
                    <FaGear size={20} />
                    <p>Testing</p>
                </div>
                <div></div>
                <div></div>
            </ul>
        </div>
    )
}
export default MobileNav
