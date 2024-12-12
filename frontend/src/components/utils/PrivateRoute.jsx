import { Navigate, Outlet} from "react-router-dom"
const PrivateRoute = () => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token');

    if (!user || !token){
        return <Navigate to='/' replace/>
    }

    return <Outlet/>

    return element;
}

export default PrivateRoute
