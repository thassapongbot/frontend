import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    let [formObj,setformObj] = useState({name: "",phone: "", email: "", password:""});
    let [signedUp,setSignedUp] = useState(false);
    let [errorSigningUp,setErrorSigningUp] = useState('');
    let navigate = useNavigate();
    let changeHandler = (e) => {
        setformObj({...formObj,[e.target.name] : e.target.value});
        //console.log(password);
    }
    let clickHandler = async(e) => {
        e.preventDefault();
        console.log(formObj);
        //use fetch and send these values to middle ware
        // if fine, then navigate to home page
        try{
            // let response = await axios.post("http://localhost:4000/signup", formObj, {
            //     headers: {
            //     'Content-Type': 'multipart/form-data'
            //     }
            // });
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL+"/signup", {...formObj});
            console.log(response);
            if(response.data){
                setSignedUp(true);
                console.log(" successfully signedup"); 
                navigate('/'); 
            }
            else {
                setSignedUp(false);
                setErrorSigningUp(" Error while signing up");
            } 
        }
        catch(err){
            console.log('error signing up');
            //res.status(500).send(err);
            setSignedUp(false);
            setErrorSigningUp(" Error while signing up");
        }
        
    }
    return ( 
        (signedUp)     
        ?       
        <div className="mb-4">
            <h5> Congratulations! You are now registered with us! Please login.</h5>
        </div>
        :    
    <div className="d-flex justify-content-center ">
    <form>
    <div className="mb-3">
        <label htmlFor="" className="form-label">Name</label>
        <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            aria-describedby="helpId"
            placeholder="" onChange={changeHandler}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="" className="form-label">Phone</label>
        <input
            type="number"
            className="form-control"
            name="phone"
            id="phone"
            aria-describedby="helpId"
            placeholder="" onChange={changeHandler}
        />
    </div>
    <div className="mb-3">
        <label htmlFor="" className="form-label">Email</label>
        <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="helpId"
            placeholder="" onChange={changeHandler}
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
            placeholder="" onChange={changeHandler}
        />
    </div>
    <button type="submit" onClick={clickHandler}  className="btn btn-primary" > Signup </button>
    </form>
</div>);
}
 
export default Signup;