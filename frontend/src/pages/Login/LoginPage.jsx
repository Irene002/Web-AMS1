import {useNavigate} from "react-router-dom";
import logo1 from '../../assets/LogoIL.png'

const LoginPage = () => {

    const navigate = useNavigate();
    return (
        <section className="flex flex-col h-screen gap-24 p-32 pt-16 bg-black overflow-hidden">
            <div className="flex justify-center">
            <img className={`w-full max-w-[300px] min-w-[300px] h-auto`} src={logo1} alt="LogoInfiniteLearning"/>
            </div>
            <div className="w-full flex justify-center">
            <div className={` shadow-md rounded-md max-w-[500px] min-w-[250px] w-full p-8`}>
                <h3 className={`GradientFont flex justify-center mb-8`}>Login</h3>
                <div>
                    <form className={`flex flex-col gap-8`}>
                        <div className={`flex flex-col gap-2`}>
                            <label className={`text-white`} htmlFor="username">Username</label>
                            <input className={`bg-white p-3 rounded-sm focus:outline-none`} type='text' name='username' placeholder='Username'/>
                        </div>

                        <div className={`flex flex-col gap-2`}>
                            <label className={`text-white`} htmlFor="password">Password</label>
                            <input className={`bg-white p-3 rounded-sm focus:outline-none`} type='password' name='passwword' placeholder='Password'/>
                        </div>
                        <div className={`flex justify-end w-full text-purple-500`}>
                            <button>Forget Password?</button>
                        </div>
                        <button className='bg-purple-500 text-white p-4 rounded-lg'
                                onClick={() => {
                                    navigate('/Dashboard')
                                }}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    )
}
export default LoginPage
