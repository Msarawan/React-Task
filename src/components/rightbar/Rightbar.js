
import "./rightbar.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Rightbar() {
  return (
    
    <div className="rightbar">
      <div className="righrbarWrapper">
      <div className="top"> Stories  <MoreVertIcon /></div>
      <hr className="line"></hr>
      <div className="rightbarLeft">
        <div className="rightbarProfileImg" ><AddCircleOutlineIcon /> </div>
           <p className='rightbarUserName'> Add a new Story  <br/> Share an image, a video or some text </p>
      </div>
      <hr className="line"></hr>

       <div className="rightbarLeft">
           <img className="rightbarProfileImg" src="/assests/dan.jpg" alt="" />
           <p className='rightbarUserName'> Dan Walker <br/> 1 hour ago </p>
      </div>
       <hr className="line"></hr>

         <div className="rightbarLeft">
           <img className="rightbarProfileImg" src="/assests/bobby.jpg" alt="" />
           <p className='rightbarUserName'> Bobby Brown<br /> 3 days ago </p>
      </div>
      <hr className="line"></hr>

      <div className="rightbarLeft">
           <img className="rightbarProfileImg" src="/assests/elise.jpg" alt="" />
           <p className='rightbarUserName'> Dan Walker<br /> Last week</p>
      </div>
      <hr className="line"></hr> 
  </div>
 </div>
   );
}

export default Rightbar;
