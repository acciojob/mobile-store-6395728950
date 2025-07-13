import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom'

const Updation = ({Data,setData}) => {
    console.log("waht is come in Data",Data);
    const location = useLocation();
    const item = location.state.state.data;
    console.log("waht is come in id",item.id);
    const history = useHistory();
    const [field,setField]= useState({...item});
        console.log("what is come in item",item);
    const handleClick = ()=>{
        const data  = Data.filter((val)=>val.id!==item.id);
        setData(data);
      history.push('/');
    }

     
    const handleChange= (e)=>{
       const{name,value} = e.target;
       setField(prev=>({
        ...prev,
        [name]:value
       }));
    }
    const handleSave = (e)=>{
        e.preventDefault();
        let data = Data.filter((val)=>val.id!==item.id);
        data = [...data,field];
        setData(data);
        history.push('/');
    }

   
  return (
    <div style={{marginTop:'20px',padding:'10px'}}>

        <form onSubmit={handleSave}>
            <label htmlFor="title">Title</label>
            <br></br>
            <input value={field.title} id="title" style={{width:'150px'}}   type="text" name="title" onChange={handleChange}/>
            <br></br>
            <label htmlFor="desc" >desc:</label>
            <br></br>
            <textarea value={field.description} id="desc" style={{width:'300px',height:'100px'}} onChange={handleChange} name='description'></textarea>
            <br></br>
            <label htmlFor="image">Image:</label>
            <br>
            </br>
            <input value={field.image} id="image"  style={{width:'250px',height:'40px'}} onChange={handleChange} name='image'></input>
            <br></br>
            <label htmlFor="price">Price:</label>
            <br></br>
            <input value={field.price} id="price" style={{width:'50px'}} onChange={handleChange} name='price'></input>
            <br></br>
            <br></br>
            <button type="submit">Save</button>
            <button type="button" onClick={handleClick}>Delete</button>
        </form>
    </div>
  )
}

export default Updation