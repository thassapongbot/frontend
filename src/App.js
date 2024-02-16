import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import SearchResult from './components/SearchResult';
import SearchHouse from './components/SearchHouse';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import axios from 'axios';
import PageNotFound from './components/PageNotFound';
import Enquiries from './components/Enquiries';


function App() {
  let [houseData,setHouseData] = useState([]);
  //fetch
  useEffect(()=>{
    let fetchData = async() =>{
      //Using local file
      //let response = await fetch("/houses.json");
      //console.log(response);
      //let data = await response.json();
      //console.log(data);
      //Using backend 
      //console.log(process.env.REACT_APP_BACKEND_URL);
      let response = await axios.get(process.env.REACT_APP_BACKEND_URL+"/houses");
      //console.log(response);
      setHouseData(response.data);
    }
    fetchData();
  },[])
  return (
    <div className="container-fluid">
    <Header/>
    <SearchFilter allhouseInfo={houseData}/>
    <Routes>
      <Route path='/' element={<House houseInfo={houseData[1]}/>}/>
      <Route path='/searchresult/:county' element={<SearchResult allhouses={houseData}/>}/>
      <Route path='/searchhouse/:id' element={<SearchHouse allhouses={houseData}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/enquiries' element={<Enquiries/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <br></br>
    <br></br>
    <Footer/>
    </div>
  );
}

export default App;
