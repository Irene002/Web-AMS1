const ButtonPrimary = ({onClick,BtnLabel, Class}) => {
    return (
        <button onClick={onClick} className={`bg-[#A25BFB] p-3 rounded-md text-white transition-all duration-300 hover:bg-[#BF8EFFFF] ${Class}`}> {BtnLabel} </button>
    )
}
export default ButtonPrimary