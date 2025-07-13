import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ProductDetails from './ProductDetails';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Productlist = ({products}) => {
    
   const history = useHistory();
   console.log("what is come in data",products);
 
  const handleClick = (index,item)=>{
    history.push(`/product/${index}`,{state:{item}});
  }
  return (
    <div>
      
     {
      
      products && products.map((item,index)=>(
        <div key={index}  style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
        <img src={item.image} height='100px'/>
       <div style={{display:'flex',flexDirection:'column'}}>
       <h1>{item.title}</h1>
       <p>Price:${item.price}</p>
       <button onClick={()=>handleClick(index+1,item)}>Buy</button>
       </div>
        </div>
      ))
     }

    </div>
  )
}

export default Productlist