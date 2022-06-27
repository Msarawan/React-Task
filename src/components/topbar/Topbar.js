import React,{useState} from 'react';
import "./topbar.css";
import Favorite from "../../components/FavoriteIcon/Favorite";
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import MailIcon from "./mailIcon/MailIcon";
 import NotificationIcon from '../NotificationIcon/NotificationIcon';
 import Chat from '../../components/chat/Chat';
 import App from "../../components/apps/App";
 import { Link } from "react-router-dom";
  import Checkout from '../../components/checkout/Checkout';
//  import ShoppingCart from '../../components/shoppingCart/ShoppingCart';

function Topbar() {
const[click , changeClick] = useState(false)

 const toggleHandler=()=>{
    changeClick(!click)
 }

 return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src="/assests/icon.jpg" alt="icon" className="img"/>
          <div className='topbarIcons'>
             <div className="topbarIconItem1">
              <Favorite/>
            </div> 
            <div className="topbarIconItem">
            <NotificationIcon/>
            </div>
            <div className="topbarIconItem">
            <MailIcon/>
            </div>
            <div className="topbarIconItem">
              <Chat/>
            </div>
             <div className="topbarIconItem">
              <Link to="/explorepage">
                <App/>
              </Link> 
            </div>
          </div>
       </div>

       <div className="topbarRight">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
        <div className="topbarIconItem2">
           {/* <ShoppingCart  onClick={toggleHandler} /> */}
           <Box sx={{ color: 'action.active' }}>
            <Badge color="secondary" variant="dot">
              <ShoppingCartIcon  onClick ={toggleHandler}/>
            </Badge>
          </Box>  
       </div> 
        <Box sx={{ color: 'action.active' }}>
            <Badge color="secondary" variant="dot">
            <img src="/assests/jenna.jpg" alt="profile-icon" className="topbarImg"/>
            </Badge>
         </Box> 
       </div>

       {click && <Checkout/>} 
    </div>
);
  }

export default Topbar;