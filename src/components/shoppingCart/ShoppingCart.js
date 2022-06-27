import React,{useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Checkout from '../../components/checkout/Checkout';

const ShoppingCart = () => {
     const[click , changeClick] = useState(false)

    const toggleHandler=()=>{
       changeClick(!click)
     }
   

  return (
        <div className="topbarRight">
       <div className="topbarIconItem2">
          <Box sx={{ color: 'action.active' }}>
            <Badge color="secondary" variant="dot">
              <ShoppingCartIcon onClick={toggleHandler}/>
            </Badge>
          </Box>  
      </div>
      {click && <Checkout/>} 
    </div>
      
    
  )
}

export default ShoppingCart
