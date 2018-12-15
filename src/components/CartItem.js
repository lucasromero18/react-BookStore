import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'


const bookEditor = {
    styles: {
        width: "100%",
        marginLeft: "20px"
    }
}

class CartItem extends Component {
    render () {
        return (
            <>
            <div style={bookEditor.styles}>
                <Card body inverse color="primary">
                    <CardTitle>{this.props.newCartBook.title}</CardTitle>
                    <CardTitle>{this.props.newCartBook.author}</CardTitle>
                    <CardTitle>${this.props.newCartBook.price}</CardTitle>
                    <CardText>{this.props.newCartBook.description}</CardText>
                </Card>
                </div>
            </>
        )
    }
}









export default CartItem;