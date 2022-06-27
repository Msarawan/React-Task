import React,{useState,useEffect} from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import BounceLoader from "react-spinners/BounceLoader";


function Home() {
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div className="homeContainer">
      {
      loading ? 
       <BounceLoader className='bounce'
         color={'#4A90E2'} 
         loading={loading} 
         size={70} />
       :

      <>
      <Topbar  className="topContainer"/>
       <div className="homeContainer"> 
        <Sidebar className="displayView"/> 
        <Feed/>
        <Rightbar/>
        </div>
      </>

      }
  
    </div>
  );
}

export default Home;
