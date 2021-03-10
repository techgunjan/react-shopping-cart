import React from 'react';
import Product from './Product'

export default function Main(props) {
const {products, onAdd, onRemove} = props; 
  return (
    <main className="block" > 
        <h2>
            Products List
        </h2>
        <div className="row">
            {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd} onRemove={onRemove}/> 
            ))}
        </div>
    </main>
  );
}
