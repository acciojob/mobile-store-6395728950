import React from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom';

const ProductDetails = (props) => {
  const location  = useLocation();
  const item = location.state.state.item;
  console.log("what is come in item",item);
  const history = useHistory();
  function handleClick(){
      history.push('/');
  }

  return (
    <div>
     {
      item && (
        <div style={{display:'flex',justifyContent:'space-between'
        }}>

          <img src={item.image}/>
          <div style={{display:'flex',flexDirection:'column'}}>
            <h1>{item.title}</h1>
            <p>Price:{item.price}</p>
            <p>{item.description}</p>
            <button onClick={handleClick}>OhterProducts</button>
          </div>
        </div>
      )
     }
    </div>
  )
}

export default ProductDetails