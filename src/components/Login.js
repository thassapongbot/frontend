import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let [invalidCreds,setinvalidCreds] = useState('');
    let navigate = useNavigate();
    let echangeHandler = (e) => {
        setEmail(e.target.value);
        //console.log(email);
    }
    let pchangeHandler = (e) => {
        setPassword(e.target.value);
        //console.log(password);
    }
    let clickHandler = async(e) => {
        e.preventDefault();
        //console.log("email is "+email+"  password is "+ password);
        //use fetch and send these values to middle ware
        // if fine, then navigate to home page
        try{
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL+"/login", {email: email, password: password});
            console.log(response);
            //console.log(response.data.length );
            if(response.data.length >0){
                sessionStorage.setItem("name",response.data[0].name);
                sessionStorage.setItem("email",response.data[0].email);
                sessionStorage.setItem("role",response.data[0].role);
                // check the role and take the user to appropriate page
                // if realtor , enquiries, if not then home page
                (response.data[0].role == "realtor") ?  navigate('/enquiries') : navigate('/');
            }else {
                setinvalidCreds('Invalid credentails. Please try again.');
                console.log("invalid credentail");
            }
            
        }
        catch(err){
            console.log('error logging in');
        } 
    }
    return ( <div className="d-flex justify-content-center ">
    <form>
    <div className="mb-3">
        <h4 className='text-danger'> {invalidCreds} </h4>
    </div>
    <div className="mb-3">
        <label htmlFor="" className="form-label">Email</label>
        <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="helpId"
            placeholder="" onChange={echangeHandler}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="" className="form-label">Password</label>
        <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            aria-describedby="helpId"
            placeholder="" onChange={pchangeHandler}
        />
    </div>
    <button type="submit" onClick={clickHandler}  className="btn btn-primary" >     Submit </button>
    </form>
</div>);
}
 
export default Login;