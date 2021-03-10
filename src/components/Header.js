import React from 'react';
import {Link} from 'react-router-dom'

export default function Header(props) {
  const {cartItems}= props;
  return (
    <header className="row block center">
      <div>
       <Link to=''>
         <h1>Home</h1>
       </Link>
      </div>
      <div>
        <Link to='cart'>
          <h1>Cart {cartItems.length}</h1> 
        </Link>
      </div>
    </header>
  );
}

      