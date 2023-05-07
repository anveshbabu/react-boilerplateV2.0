
import { useNavigate } from 'react-router-dom';
import { NormalInput, NormalButton } from '../../components/common';








export const LoginPage = () => {
    const navigate = useNavigate();


    const  handleSubmit=()=>{
        navigate('/dashboard');
    }


    return (
        <div className="row login justify-content-md-center login-page">
            <div className="col-md-9 col-xs-9 mb-4">
                <div className="row">
                    <div className="col-md-12 title">
                        <h4>Welcome!</h4>
                        <h4>Sign to Continue</h4>
                    </div>
                </div>
            </div>
            <div className="col-md-9 col-xs-9 mb-4">
                <NormalInput label='Email' />
                <NormalInput label='Password' type='password' />
          
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-grid gap-2">
                            <NormalButton label='Sign in' onClick={handleSubmit} className=' btn-primary shadow' />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}