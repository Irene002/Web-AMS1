import { useNavigate } from "react-router-dom";

import ButtonPrimary from '../Button/ButtonPrimary.jsx'

const Card1 = ({ Title, TitleIcon, Description, ButtonLabel, Path }) => {
    const Navigate = useNavigate();

    return (

        <div className='Card1 bg-white shadow-md p-8 flex flex-col items-start gap-4 rounded-md overflow-clip w-full'>
            <div className='flex flex-wrap gap-4 items-center '>
                <h4>{Title}</h4>
                {TitleIcon}
            </div>

            <p> {Description} </p>
            <ButtonPrimary
                BtnLabel={ButtonLabel}
                onClick={() => Navigate(Path)}>
            </ButtonPrimary>
        </div>
    )
}
export default Card1
