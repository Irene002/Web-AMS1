import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();
    return (
        <div>LoginPage
        <button className='bg-black text-white p-4 rounded-lg' 
        onClick={()=>{
            navigate('/Dashboard')
        }}> Masuk</button>
        </div>
    )
}
export default LoginPage
