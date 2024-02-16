import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResult = (props) => {
    let myObj = useParams();
    let filterArr = props.allhouses.filter((house)=>(myObj.county == house.county))
    console.log(filterArr);
    return ( <div>
        <div
            className="table-responsive"
        >
            <table
                className="table table-primary"
            >
                <thead>
                    <tr>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterArr.map((house)=>{
                            return  <SearchResultsRow key={house._id} house={house}/>
                        })   
                    }
                </tbody>
            </table>
        </div>
        
    </div> );
}
 
export default SearchResult;