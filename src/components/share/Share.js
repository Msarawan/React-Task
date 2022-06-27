import "./share.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
        <div className="shareBottom">
               <div className="shareOptions">
                 <div className="shareOption1">
                    <BorderColorIcon className="shareIcon"/>
                    <span className="shareOptionText"> Publish</span>
                </div>
                <div className="shareOption2">
                    <CollectionsIcon  className="shareIcon"/>
                    <span className="shareOptionText"> Albums</span>
                </div>
                <div className="shareOption2">
                    <VideocamIcon className="shareIcon"/>
                    <span className="shareOptionText"> Video</span>
               </div>
         </div>
         </div>
                <hr className="shareHr"/>

            <div className="shareTop">
            <img className="shareProfileImg" src="/assests/avtar.jpg" alt="img" />
                <input placeholder="Write somthing about you..." className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                 <div className="shareOptions">
                 <div className="shareOption3">
                 <PhotoCameraIcon  className="shareIcon"/>
                    <span className="shareOptionText"> Media</span>
                </div>
                <div className="shareOption3">
                    <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText"> Activity</span>
                </div>
                <div className="shareOption3">
                    <MoreHorizIcon htmlColor="gray" className="shareIcon"/>
                    <span className="shareOptionText"></span>
                 </div>
           </div>
         </div>
        </div>
    </div>
      
  )
}

export default Share;
