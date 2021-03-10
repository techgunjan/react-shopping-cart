import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import data from './data';
import {useState} from 'react'


function App() {
  const {products} = data;
  const [cartItems, setcartItems] = useState([])
  const onAdd = (product) =>{
    const exist =  cartItems.find(x => x.id === product.id);
    if(exist){
      setcartItems(cartItems.map(x =>x.id === product.id ? {...exist, qty: exist.qty +1 }: x))
    }else{
      setcartItems([...cartItems,{...product,qty:1 }])
    }
  }
  const onRemove = (product) =>{
    const exist =  cartItems.find(x => x.id === product.id);
    if(exist.qty === 1){
      setcartItems(cartItems.filter((x) =>x.id !== product.id))
    }else{
      setcartItems(cartItems.map(x =>x.id === product.id ? {...exist, qty: exist.qty -1 }: x))
    }
  }
  return (
    <Router>
    <div className="App"> 
     <Header cartItems={cartItems}/>
     <Switch>
       <Route path='/' exact >
          <Main onRemove={onRemove} onAdd={onAdd} products={products}></Main>
       </Route>
       <Route path='/cart' exact>
         <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
