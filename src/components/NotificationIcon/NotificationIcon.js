import React ,{useState} from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Notification from '../notifications/Notification';

function NotificationIcon (){
    const [click, changeClick]= useState(false);

    const toggle = () => {
      changeClick(!click);
    };
 

  return (
        <div className="topbarContainer">
          <div className="topbarLeft">
          <div className="topbarIconItem">
                < NotificationsNoneIcon   className='colorBlue' onClick={toggle}/>
           </div>
            {click && <Notification/> }
           </div>
        </div>

  )
}

export default NotificationIcon;
