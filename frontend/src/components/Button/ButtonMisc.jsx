const ButtonMisc = ({ onClick, Class, BtnLabel, disableBtn }) => {
    return (
        <>
            <button disabled={disableBtn} onClick={onClick} className={`p-3 rounded-md transition-all duration-300 ] ${Class}`}> {BtnLabel} </button>
        </>
    )
}
export default ButtonMisc
