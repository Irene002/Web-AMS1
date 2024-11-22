const Card2 = ({Title, Description, Button}) => {
    return (
        <div className='bg-white shadow-md p-8 rounded-lg'>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <h4>{Title}</h4>
                    <p>{Description}</p>
                </div>
                <div>
                    {Button}
                </div>
            </div>
        </div>
    )
}
export default Card2
