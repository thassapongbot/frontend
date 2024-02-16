import Enquiry from "./Enquiry";
import { useState } from "react";

const House = (props) => {
    let [showEnquiry, setShowEnquiry] = useState(true);
    if(!props.houseInfo){
        return <h4>Loading ....</h4>
    }
    console.log(props)
    return ( 
        <div>
        <div className="row">
            <div className="col-sm-7"><b>{props.houseInfo.address}</b></div>
            <div className="col-sm-5"><b>Price is $ {props.houseInfo.price}</b></div>
        </div>
        <div className="row">
            <div className="col-sm-7"><img className="img-thumbnail" src={"/imgs/"+props.houseInfo.photo} alt="house img"></img></div>
            <div className="col-sm-5">
                <p>{props.houseInfo.description}</p>
                { props.showEnquiry && <Enquiry address={props.houseInfo.address}/> }
            </div>
        </div>
        </div>
     );
}
 
export default House;