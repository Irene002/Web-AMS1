const Card2 = ({ ButtonClass, OnClick, Title, Description, Button }) => {
    return (
        <div className='bg-white shadow-md p-8 rounded-lg'>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <h4 className="mb-2">{Title}</h4>
                    <p>{Description}</p>
                </div>
                <button className={ButtonClass} onClick={OnClick}>
                    {Button}
                </button>
            </div>
        </div>
    )
}
export default Card2
