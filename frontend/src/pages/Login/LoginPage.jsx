import logo1 from '../../assets/LogoIL.png'
import { useState } from "react";

const LoginPage = () => {
    const contents = {
        image: logo1,
        heading: 'Login',
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        if (!username || !password) {
            setError('Username and Password are required!');
            
            setLoading(false);
            
            setTimeout(() => {
                setError(false);
            }, 10000);

            return;

        }

        try {
            const response = await fetch('http://localhost:3015/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Invalid Username or Password');
                setLoading(false);
                
                setTimeout(() => {
                    setError(false);
                }, 10000);

                return;
            }

            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);
            window.location.href = '/Dashboard'

        } catch (error) {
            setError('Something went wrong, please try again.');

            setTimeout(() => {
                setError(false);
            }, 10000);
            
            setLoading(false);
        }
    }

    return (
        <section className="flex flex-col h-screen gap-24 p-32 pt-16 pl-2 pr-2 bg-black overflow-hidden LoginWrapper">
            <div className="flex justify-center">
                <img className={`w-full max-w-[300px] min-w-[300px] h-auto logoILLogin`} src={contents.image} alt="LogoInfiniteLearning" />
            </div>
            <div className="w-full flex justify-center">
                <div className={` shadow-md rounded-md max-w-[500px] min-w-[250px] w-full p-8`}>
                    <h3 className={`GradientFont flex justify-center mb-8`}>{contents.heading}</h3>
                    <div>
                        <form onSubmit={handleSubmitLogin} className={`flex flex-col gap-8`}>
                            <div className={`flex flex-col gap-2`}>
                                <label className={`text-white`} htmlFor="username">Username</label>
                                <input autoComplete="off" onChange={(e) => setUsername(e.target.value)} value={username} className={`bg-white p-3 rounded-sm focus:outline-none`} type='text' name='username' placeholder='Username' />
                            </div>

                            <div className={`flex flex-col gap-2`}>
                                <label className={`text-white`} htmlFor="password">Password</label>
                                <input autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} className={`bg-white p-3 rounded-sm focus:outline-none`} type='password' name='password' placeholder='Password' />
                            </div>
                            <div className="flex justify-end">
                                {error && <p className={`text-red-500`}>{error}</p>}
                            </div>
                            <button type="submit" disabled={loading} className={`bg-purple-500 text-white p-4 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                {loading ? 'Logging In...' : 'Login'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LoginPage