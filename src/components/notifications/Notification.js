import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./notification.css";
import Notifications from "../../notification.json";

const Notification = () => {

  return (
    <div className="topmenu1">
    <div className="top"> NOTIFICATIONS <NotificationsNoneIcon    /></div>
    <hr className="line"></hr>
    {
              Notifications && Notifications.map( notification => {
                  return(
                 <div className='border' key={notification.id}>
                     <img className ="rightbarProfileImg" src ="assests/david.jpg" alt="" />
                       <div className='rightbarUserName'>
                       
                       { <FavoriteBorderIcon className='icon5' /> }
                       {notification.username}
                       <br />
                       {notification.desc}
                        <br/>
                        {notification.date}
                        <br/><br/>
                     <hr className="line"></hr>  
                     </div>
                     </div>
                    )
                })
            }

     </div> 
  );
  
}

export default Notification
