import React from 'react';
import "./favorite.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Favorite = () => {
  return (
    <div className="topbarContainer">
    <div className="topbarLeft">
    <div className="topbarIconItem">
          < FavoriteBorderIcon className='colorRed' />
    </div>
    </div>
  </div>

  )
}

export default Favorite
