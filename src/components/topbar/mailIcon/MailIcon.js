import MailOutlineIcon from '@mui/icons-material/MailOutline';
import "./mailIcon.css"
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
 import Mail from "../../mail/Mail"
import { useState } from "react";

const MailIcon = () => {

    const [click, changeClick]= useState(false);

     const clickHandler = () => {
       changeClick(!click);
     };
  
  return (
   <div className="topbarContainer">
       <div className="topbarLeft">
         <div className="topbarIconItem">
            <Box sx={{ color:'action.active' }}>
            <Badge color="secondary" variant="dot">
              <MailOutlineIcon  className='colorBlue'  onClick={clickHandler}/>
            </Badge>
           </Box> 
       </div>
         { click && <Mail /> } 
        </div> 
      </div>

  )
}

export default MailIcon;
