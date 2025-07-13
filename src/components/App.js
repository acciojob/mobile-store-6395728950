
 import React, { useEffect, useState } from "react";
import './../styles/App.css';
import Productlist from "./Productlist";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Updation from "./Updation";
import AddProducts from "./AddProducts";

const App = () => {
  const[Data,setData] = useState([]);
      
    useEffect(() => {
      fetch('https://dummyjson.com/products/category/smartphones')
        .then(res => res.json())
        .then(data => {
          const mobileData = data.products.map(product => ({
            id:product.id,
            title: product.title,
            price: product.price,
            image: product.thumbnail,
            description: product.description
          }));
           setData(mobileData);
        });
    }, []);
    console.log("what is come in mobileData",Data);
  return (
    <Router>
      <div>
        <Link to="/"> <button>Home</button></Link>
 
         <Link to="/admin"><button>Admin</button></Link>

          <Switch>
                <Route
          path="/"
          exact
          render={(routeProps) => (
            <Productlist {...routeProps} products={Data} />
          )}
        />
          <Route path="/product/:id" component={ProductDetails} />

          <Route path="/admin" exact render={(routeProps)=>(<AdminPanel {...routeProps} item={Data}/>)}/>
          <Route path="/admin/:id" exact render={(routeProps)=>(<Updation {...routeProps} Data={Data} setData={setData}/>)}></Route>
          <Route path="/addproduct" exact render={(routeProps)=>(<AddProducts {...routeProps} setData={setData} Data={Data}/>)}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

