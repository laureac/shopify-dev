import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { ShopContext } from '../context/shopContext';
import Navigation from '../components/Navigation';

const ProductPage = () => {

    let {id} = useParams();
    
    const {fetchProductWithId, addItemToCart, product} = useContext(ShopContext);

    useEffect(()=>{
        fetchProductWithId(id)
        return() =>{

        }
    }, [fetchProductWithId, id])

    if(!product || !product.variants || !product.images) return <div>Loading...</div>

    return (
        <div>
            <Navigation />
            <div className='container'>
                <div className='single-product'>
                    <img src={product.images[0].src} alt={product.handle}/>
                    <div className="content">
                        <h2>{product.title}</h2>
                        <p className="dollar">{product.variants[0].price}</p>
                        <button onClick={()=> addItemToCart(product.variants[0].id, 1)}>Add to cart</button>                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
