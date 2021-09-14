import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';

const Cart = () => {

    const {checkout} = useContext(ShopContext)

    return (
        <div >
            {checkout.lineItems && checkout.lineItems.map(item=>{
                return(
                    <div key={item.id}>
                        <div className='thumbnail' style={{backgroundImage: `url(${item.variant.image.src})`}} />
                        <div>{item.title}</div>
                        <div>{item.quantity}</div>
                    </div>
                )
            })}
        </div>
    )
    
}

export default Cart
