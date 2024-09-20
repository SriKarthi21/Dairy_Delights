import './App.css';
import {useState,useEffect,useContext} from 'react';
import Header from './components/Header';
import ProductView from './components/ProductView';
import Footer from './components/Footer';
import axios from 'axios';
import MenuBar from './components/MenuBar';
import applyFilters from './utils.js/FilterCard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import Orders from './components/Orders';
import AuthContext from './utils.js/AuthContext';
import { useErrorBoundary } from 'react-error-boundary';


function App() {

  const [value,setValue]=useState([]);
  const [filterCatergory,setfilterCatergory]=useState("")
  const [searchText,setSearchText]=useState("")  
  const { isLoggedIn } = useContext(AuthContext);
const{showBoundary}=useErrorBoundary();
  useEffect(()=>{
    let active=true;
  async function fetchData(){
      try{
        const response=await axios.get("http://localhost:3000/products")
        setValue(response.data);    

    }catch(error){
      console.log("Fetching Error",Error)
      showBoundary(error)
    }
  }
    fetchData();
    return()=>{
      active=false;
    }
  },[searchText,showBoundary]);
  const handleFilter=(e)=>{ setfilterCatergory(e.target?.value) };
  const handleSearch=(e)=>{ setSearchText(e.target?.value ) };
  const handleClear=(e)=>{setSearchText("")}
let filteredData=applyFilters(value,filterCatergory,searchText)
  return (
  <BrowserRouter>
        <Header onSearchText={searchText} onSearch={handleSearch} onClearText={handleClear}/>
      {!isLoggedIn &&  <MenuBar onfilterValue={filterCatergory} onFilter={handleFilter}/>  }
<Routes>
  <Route path="/"  element={ <ProductView data={filteredData} />} />
  <Route path="/details/:id" element={ <ProductDetail/>} />
  <Route path="/login" element={<Login/>}  />
  {isLoggedIn && ( <Route path="/orders" element={<Orders />} />)}
  <Route path="/*" element={<PageNotFound />} />
</Routes> 
      <Footer/> 
  </BrowserRouter>
  );
}

export default App;
