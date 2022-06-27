import React from 'react';
import "./explore.css";
import { Link } from "react-router-dom";


const Explore = () => {
return (
 <div className='explore'>
    <div className='header'>
     <h1>Explore</h1>
     <div className='searchbar'> <input type="text" placeholder="Filter" className="searchInput" /></div>
     </div>
    

   <div className="row">
      <div className="column">
        <Link to="/">
         <img src="assests/clover.svg" alt="" className='img'/>
         </Link>
        <h4 className='textShow'>Feed</h4>
        </div>
        <div className="column">
         <img src="assests/friends.svg" alt="" className='img'/>
         <h4 className='textShow' >Friends</h4>
         </div>
        <div className="column">
          <img src="assests/videos.svg" alt="" className='img'/>
          <h4 className='textShow'>Videos</h4>
        </div>
        <div className="column">
         <img src="assests/pages.svg" alt="" className='img'/>
          <h4 className='textShow'>Pages</h4>
         </div>
         <div className="column">
          <Link to="/commerce">
         <img src="assests/cart.svg" alt="" className='img'/>
         </Link>
          <h4 className='textShow'>Commerce</h4>
         </div>
         </div>

  <div className="row">
        <div className="column">
         <img src="assests/house.svg" alt="" className='img'/>
        <h4 className='textShow'>Interests</h4>
        </div>
        <div className="column">
         <img src="assests/chrono.svg" alt="" className='img'/>
         <h4 className='textShow'>Stories</h4>
         </div>
        <div className="column">
          <img src="assests/question.svg" alt="" className='img'/>
          <h4 className='textShow'>Questions</h4>
        </div>
        <div className="column">
         <img src="assests/news.svg" alt="" className='img'/>
          <h4 className='textShow'>News</h4>
         </div>
         <div className="column">
         <img src="assests/cake.svg" alt="" className='img'/>
          <h4 className='textShow'>Groups</h4>
         </div>
         </div>

  <div className="row">
        <div className="column">
         <img src="assests/envato.svg" alt="" className='img'/>
        <h4 className='textShow'>Envato</h4>
        </div>
        <div className="column">
         <img src="assests/calendar.svg" alt="" className='img'/>
         <h4 className='textShow' >Events</h4>
         </div>
        <div className="column">
          <img src="assests/pin.svg" alt="" className='img'/>
          <h4 className='textShow'>Css Ninja</h4>
        </div>
        <div className="column">
         <img src="assests/idea.svg" alt="" className='img'/>
          <h4 className='textShow'>Elements</h4>
         </div>
         <div className="column">
         <img src="assests/settings.svg" alt="" className='img'/>
          <h4 className='textShow'>Settings</h4>
         </div>
         </div>

</div>
      
  )
}

export default Explore
