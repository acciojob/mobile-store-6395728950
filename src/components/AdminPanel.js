import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const AdminPanel = ({item}) => {
  const history = useHistory();
  const handleUpdation = (data,index)=>{
    history.push(`admin/proudct${index+1}`,{state:{data}})
  }
  const handleAddProduct = ()=>{
    history.push("/addproduct");
  }

  
  return (
    <div style={{margin:'10px'}}>
    <button onClick={handleAddProduct}>AddProducts</button>
      {item && item.map((items,index)=>(
        index<8 &&
        <div key={index} style={{display:'flex'}} onClick={()=>handleUpdation(items,index)} > 
            <img src={items.image} height='70px'/>
            <p>{items.title}</p>
        </div>
      ))}
    </div>
  )
}

export default AdminPanel
