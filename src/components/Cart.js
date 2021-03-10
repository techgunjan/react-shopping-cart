import React from 'react'

function Cart(props) {
    const {cartItems, onAdd, onRemove} =  props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    return (
        <div className="block">
         <h2>Cart Items</h2>
         <div>
             {cartItems.length === 0 && <div>Cart is Empty </div>}
         </div>
         {cartItems.map((item)=>(
             <div key={item.id} className="row">
             <div>{item.name}</div>
             <div>
             <button onClick={()=>onAdd(item)} className="add">+</button>    
             <button onClick={()=>onRemove(item)} className="add">-</button>  
             </div>    
             <div>
                 {item.qty} x ₹{item.price}
             </div>   
             </div>
         ))}
         {cartItems.length !== 0 &&(
             <>
             <hr></hr>
             <div className="row">
                 <div><strong>Total Price</strong></div>
                 <div><strong>₹{itemsPrice} </strong></div>
             </div>
             </>
         )}
        </div>
    )
}

export default Cart
