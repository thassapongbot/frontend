import { useNavigate } from "react-router-dom";

const SearchFilter = (props) => {
    console.log(props.allhouseInfo);
    let arrWithDupCounty = props.allhouseInfo.map((elem)=>{
        return elem.county
    })
    //console.log(arrWithDupCounty);
    const uniqCounties = Array.from(new Set(arrWithDupCounty));
    let navigate = useNavigate();
    //console.log(uniqCounties);
    let changeHandler = (e) =>{
        console.log(e);
        console.log(e.target.value);
        //navigate to search results component
        let county = e.target.value;
        navigate('/searchresult/'+county)
    }
    return ( <div>
        <div className="row d-flex justify-content-center">
            <div className="col-sm-5 text-center">
                <select onChange={changeHandler}>
                    <option value='select'>Select</option>
                    {uniqCounties.map((county)=>{
                        return <option key={county} value={county}>{county}</option>
                    })}
                </select>
            </div>
        </div>
    </div> );
}
 
export default SearchFilter;