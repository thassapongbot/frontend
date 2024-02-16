import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Enquiry = (props) => {
    let [enquiryObject,setEnquiryObject] = useState({email:"",name:"",phone:"",remarks:"",address: ""});
    let [submittedEnquiry,setsubmittedEnquiry] = useState(false);
    let navigate = useNavigate();
    let onChangeHandler = (e) => {
        setEnquiryObject({...enquiryObject,[e.target.name]:e.target.value});
        //console.log(enquiryObject);
    }
    let clickHandler = async(e) => {
        e.preventDefault();
        //console.log("email is "+email+"  password is "+ password);
        //use fetch and send these values to middle ware
        // if fine, then navigate to home page
        try{
            enquiryObject = {...enquiryObject, address: props.address};
            console.log(enquiryObject);
            let response = await axios.post(process.env.REACT_APP_BACKEND_URL+"/addenquiry", {...enquiryObject});
            console.log(response);
            setsubmittedEnquiry(true);
            //navigate('/');
        }
        catch(err){
            console.log('error submitting enquiry');
            setsubmittedEnquiry(false);
        }
    }
    return (
        (submittedEnquiry) 
        ?
        <div  className="mt-3">
                <h5> Thanks for submitting! Our realtor will get in touch with you soon!</h5>
        </div>
        :
        <div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                    onChange={onChangeHandler}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Phone Number</label>
                <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Remarks</label>
                <input
                    type="text"
                    className="form-control"
                    name="remarks"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
               
            </div>
           
        <button
            type="submit"
            className="btn btn-primary"
            onClick={clickHandler} 
        >
            Submit
        </button>
        </div>
     );
}
 
export default Enquiry;