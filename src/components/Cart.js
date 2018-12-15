import React, { Component } from 'react'
import CartItem from './CartItem.js'

const cartLabel = {
    styles: {
        textAlign: "center",
        backgroundColor: "blue",
        color: "white"
    }
}

const total = {
     styles: {
         marginTop: "40%",
     }
}


class Cart extends Component {
    render () {
        console.frog = console.log;
        console.frog(this.props.CartItems)
   const newCartBook = this.props.CartItems.map(book => <CartItem key={book.id} newCartBook={book} />)
        return (
            <div style={{width: '30%', marginLeft: '30%'}}>
            <h1 style={cartLabel.styles}>Books In Cart</h1>
            {newCartBook}
            <h3 style={total.styles}>Total: </h3>
            </div>
        )
    }
}









export default Cart;