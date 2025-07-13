import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const AddProducts = ({setData,Data}) => {
    const history = useHistory();
    const[item,setItem] = useState({
        id:"",
        title:"",
        description:"",
        image:"",
        price:""
    })
    const handleChange= (e)=>{
        const{name,value}   = e.target;
      setItem(prev=>({
        ...prev,
        [name]:value
      }));
    }
    console.log("what is come in item",item);

const handlesubmit = (e)=>{
   e.preventDefault();
   setData([...Data,item]);
   history.push("/");

}
  return (
    <div style={{marginTop:'30px'}}>
  <form onSubmit={handlesubmit}>
    <label htmlFor="itemid">Id:</label>
    <br></br>
    <input id="itemid" style={{width:'50px'}} name="id" onChange={handleChange}></input>
    <br></br>
    <label htmlFor="title">title:</label>
    <br></br>
    <input id='title' type="text"  name="title" onChange={handleChange}></input>
    <br></br>
    <label htmlFor="desc">desc:</label>
    <br></br>
    <textarea id="desc" style={{width:'200px', height:'100px'}}  name="description" onChange={handleChange}></textarea>
    <br></br>
    <label htmlFor="image">Image:</label>
    <br></br>
    <input id="image"  name="image" onChange={handleChange}></input>
    <br></br>
    <label htmlFor="price">Price:</label>
    <br></br>
    <input id="price" style={{width:'50px'}}  name="price" onChange={handleChange}></input>
    <br></br>
    <button type="submit"> Add</button>
  </form>
    </div>
  )
}

export default AddProducts