import React from 'react';
import "./mail.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
 import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Records from "../records.json";

const Mail = () => {

  return(
    <div className="topmenu">
    <div className="top"> MESSAGES  <MailOutlineIcon/></div>
    <hr className="line"></hr>


       {
              Records && Records.map( record => {
                  return(
                 <div className='border' key={record.id}>
                     <img className ="rightbarProfileImg" src ="assests/dan.jpg" alt="" />
                       <div className='rightbarUserName'>
                       <ChatBubbleOutlineIcon className='icon2' /> 
                       {record.username}
                       <br/><br/>
                       {record.desc}
                        <br/>
                      {record.date}
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
      

export default Mail;
