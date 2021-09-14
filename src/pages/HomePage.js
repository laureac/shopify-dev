import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Cart from '../components/Cart';

const Homepage = () => {

    const {fetchAllProducts, products} = useContext(ShopContext);

    useEffect(() => {
        console.log(products)
        fetchAllProducts();
        return() =>{

        };
    }, [fetchAllProducts])
    if(!products) return <div>Loading...</div>

    return (
        <div>
            <Navigation />
            <Cart />
            <div className="container">
                {products.map(product =>{
                    return(
                        <div key={product.id} className='product-card'>
                        <Link to={`/product/${product.id}`}>
                                <div>
                                    <img src={product.images[0].src} alt={product.handle}/>
                                    <h2>{product.title}</h2>
                                    <p className="dollar">{product.variants[0].price}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    ) 
}

export default Homepage;