import React from 'react';
import "./commerce.css";
import Topbar from '../../components/topbar/Topbar';
import Ecommerce from '../../components/ecommerce/Ecommerce'; 

const Commerce = () => {
  return (
    <div className='display'>
      <Topbar/>
      <Ecommerce/>
    </div>
  )
}

export default Commerce;
