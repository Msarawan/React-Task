import React from 'react';
import "./chat.css";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


const Chat = () => {
 return (
  <div className="topbarContainer">
    <div className="topbarLeft">
    <div className="topbarIconItem">
          <ChatBubbleOutlineIcon  className='colorBlue'/>
    </div>
    </div>
  </div>

  )
}

export default Chat
