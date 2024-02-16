import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    let navigate = useNavigate();
    let loginHandler= () =>{
        navigate('/login');
    }

    let logoutHandler = () => {
        sessionStorage.clear();
        navigate('/');
    }

    let signupHandler = () => {
        navigate('/signup');
    }
    return (
        <div className="row bg-warning align-items-center">
            <div className="col-sm-3">
                <Link to='/'><img className="w-25 rounded" src="/imgs/logo.png" alt="logo"/></Link>
            </div>
            <div className="col-sm-6"> <h2>Your real estate destination</h2></div>
            <div className="col-sm-3 d-flex justify-content-end">
            {
                (sessionStorage.getItem("name")) 
                ?
                <button onClick={logoutHandler} className="btn btn-primary mx-3" type="button">Logout</button>
                 :
                 <> 
                <button onClick={loginHandler} className="btn btn-primary mx-3" type="button">Login</button>
                <button onClick= {signupHandler} className="btn btn-success" type="button">Signup</button>
                 </>
                    }
            </div>
        </div>
      );
}
 
export default Header;