import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
 import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Comments from "../../comments.json";
import "./comment.css";

const Comment = () => {
  return (
    <div className='commentHeader'>
      <div className='topSection'> Comments(5)  <CancelIcon /></div>
      {
              Comments && Comments.map( comment => {
                   return(
                    <div>
                    <img className="rightbarProfileImg" src="assests/dan.jpg" alt="" />
                    <div className="rightbarLeft">
                    <p className='rightbarUserName' >{comment.username} <br/>{comment.date} <br/> <br/>{comment.desc} <br/> <ThumbUpIcon/>{comment.like} Reply Edit <br/><br/></p>
                   </div>
                   </div>

                   )
               })
           }
    </div>
  );
         
} 

export default Comment;
