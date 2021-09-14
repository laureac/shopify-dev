import React, { Component } from 'react';
import Client from 'shopify-buy';

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: 'react-shop-development-store.myshopify.com',
  storefrontAccessToken: 'e52d070447ba1d423f03b6a913787295'
});

class shopProvider extends Component {

    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false
    }

    componentDidMount() {
        this.createCheckout()
    }

    createCheckout = async () =>{
        const checkout = await client.checkout.create()
        this.setState({checkout: checkout})
    }

    addItemToCart = async (productId, quantity) =>{
        const lineItemsToAdd = [
            {
                variantId: productId,
                quantity: quantity
            }
        ];
        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd);
        this.setState({checkout: checkout})
    }

    fetchAllProducts = async () =>{
        const products = await client.product.fetchAll()
        this.setState({products: products})  
    }

    fetchProductWithId = async (id) =>{
        const product = await client.product.fetch(id);
        this.setState({product: product}) 
    }

    openCart = this.setState({isCartOpen: true}) 
    closeCart = this.setState({isCartOpen: false}) 

    render() {
        return (
            <ShopContext.Provider value={{ 
                ...this.state,
                fetchAllProducts: this.fetchAllProducts,
                fetchProductWithId: this.fetchProductWithId,
                openCart: this.openCart,
                closeCart: this.closeCart,
                addItemToCart: this.addItemToCart }}>
                {this.props.children}
            </ShopContext.Provider>
        )
    }
}

const ShopConsumer = ShopContext.Consumer;
export default  shopProvider;
export {  ShopConsumer, ShopContext };
