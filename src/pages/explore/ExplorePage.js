import React from 'react';
import "./explorePage.css";
 import Topbar from "../../components/topbar/Topbar";
 import Explore from "../../components/explore/Explore";
 

const ExplorePage = () => {
  return (
    <div className='pagecontainer'>
      <Topbar />
      <Explore/>
    </div>
  )
}

export default ExplorePage;