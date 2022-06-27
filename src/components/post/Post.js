import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { Users } from "../../data";
import Comment  from "../comment/Comment";
import { useState } from "react";


function Post({post}) {

  const[click , setClick] = useState(false);

  const clickHandler=()=>{
       setClick(!click);
  }


  return (
    <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img
            className="postProfileImg"
            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
            alt=""
                    />
    <span className="postUsername">
            {Users.filter((u) => u.id === post?.userId)[0].username}
          </span>
          <span className="postDate">{post.date}</span>
        </div>
        <div className="postTopRight">
          <MoreVertIcon />
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post?.desc}</span>
        <img className="postImg" src={post.photo} alt="" />
      </div>
      <div className="postBottom">
         <div className="postBottomLeft">
          <AvatarGroup max={4}>             
          <Avatar alt="Dan walker" src="/assests/dan.jpg" />
          <Avatar alt="David Kim" src="/assests/david.jpg" />
          <Avatar alt="Edward Mayers" src="/assests/edward.jpg" />
          <Avatar alt="Milly Augustine" src="/assests/milly.jpg" />
         </AvatarGroup>
         <span className="postLikeCounter">Milly, David and 23 more liked this </span>
         </div>
       </div>

       <div className="postBottomRight">
            <div className="postCommentText">
               <ChatBubbleOutlineIcon  className="left" onClick={clickHandler}/>
               <InsertLinkIcon className="center"/>
               <FavoriteBorderIcon  className="right"/>
               {click && <Comment/>}
            </div>
         </div>

    </div>
   </div>
  
  );
  }
  export default Post;
