
 import React,{useState, useEffect}from 'react';
 import "./components/css/App.css";
 import Home from "./pages/home/Home";
 import ExplorePage from './pages/explore/ExplorePage';
 import Commerce from "./pages/commerce/Commerce";
 import {Routes} from "react-router-dom";
 import {Route} from "react-router-dom";
 import BounceLoader from "react-spinners/BounceLoader";

 
 function App() {

  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
 
   return (
     <div className='App'>
     {
      loading ? 
       <BounceLoader className='bounce'
         color={'#4A90E2'} 
         loading={loading} 
         size={70} />
       :

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/explorepage" element={<ExplorePage/>}></Route>
        <Route path="/commerce" element={<Commerce/>} ></Route>
       <Route path="/commerce/explorepage" element={<ExplorePage/>}></Route> 
        </Routes> 
 }
 
     </div>
   )
 }
 
 export default App
 