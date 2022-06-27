import React from 'react';
import {useState,useEffect} from "react";
//import { createContext } from 'react';
import "./ecommerce.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Products } from '../../cart';
import { Items } from '../../cart';
import BounceLoader from "react-spinners/BounceLoader";



//export const CartContext = createContext();

const Ecommerce = () => {

  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

return (
<div>
{
      loading ? 
       <BounceLoader className='bounce'
         color={'#4A90E2'} 
         loading={loading} 
         size={70} />
       :
 <>
  {/* <CartContext.Provider> */}
  <div className='topsection'>
     <div className="row">
        <div className="column">
         <img src="assests/store.svg" alt="" className='img2'/>
         <h4 className='textDisplay'>Iconic<br/></h4>
         <p className="text1">Quick fashion for everyone</p>
        </div>

        <div className="column">
        <div className='view'>
         <h4 className='text2'>Overview<br/></h4>
        <p className ="text3"><span> 252</span>  <span> 4.7K</span>  <span> 2.1K</span></p>
        <p className ="text6"><span> Products</span>  <span> Likes</span>  <span> Followers</span></p>
       </div>
       </div>
        
     <div className="column">
         <h4 className='text4'>About Us<br/></h4>
         <p className="text5">We are an independent fashion store and we sale finely designed and handcrafted outfits for the best price. 
         Browse our collection and discover our products.</p>
        </div> 
    </div>

    <div>
        <p className='options'><span className='space'>Products</span><span className='space'>Brands</span><span className='space'>Followers</span></p>
    </div>  


    {/* cart section  */}
    
      <div className='info'>
        {Products &&
          Products.map((products) => {
            return (
              <div key={products.id}>
                 <div className='details'>
                     <img src={products.img} alt="" className='imgSize' />
                     <br/>
                    <div className='info2'>
                     <strong>{products.name}</strong>
                       <br/>
                     {products.desc}
                     <br/><br/>
                   <div className="details1">
                    <p><FavoriteBorderIcon className='color'/> {products.like}</p>
                    <div className='background'>  <ShoppingCartIcon/> {products.price} </div>
                  </div>
                 </div>

             </div>
              </div>
            );
          })}
   </div>

    <div className='info3'>
        {Items &&
          Items.map((items) => {
            return (
              <div key={items.id}>
                 <div className='details'>
                     <img src={items.img} alt="" className='imgSize' />
                     <br/>
                    <div className='info2'>
                     <strong>{items.name}</strong>
                       <br/>
                     {items.desc}
                     <br/><br/>
                   <div className="details1">
                    <p><FavoriteBorderIcon className='color'/> {items.like}</p>
                    <div className='background'>  <ShoppingCartIcon/> {items.price} </div>
                  </div>
                 </div>

             </div>
              </div>
            );
          })} 

      </div>
      </div>
      {/* </CartContext.Provider> */}
      </>
}
 </div> 
  )
}

export default Ecommerce
