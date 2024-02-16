import { useNavigate } from "react-router-dom";

const SearchResultsRow = ({house}) => {
    let navigate = useNavigate();
    let clickHandler = () =>{
        console.log(house);
        navigate('/searchHouse/'+house._id)
    }
    return ( 
       <tr className="" key={house._id} onClick={clickHandler}>
                            <td scope="row">{house.address}</td>
                            <td>$ {house.price}</td>
        </tr>
    );
}
 
export default SearchResultsRow;