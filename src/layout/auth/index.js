


import './auth.scss'
import { Outlet } from "react-router-dom";



export const AuthLayout = () => {

    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 auth-layout d-flex align-items-center text-center">
            </div>
            <div className="col-md-6 align-self-center">

                <Outlet />
            </div>
        </div>
        </div>

    )

}