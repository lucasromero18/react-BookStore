import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'


const bookEditor = {
    styles: {
        width: "30%",
        marginLeft: "20px"
    }
}

const availableHeader = {
    styles: {
        textAlign: "center",
        backgroundColor: "blue",
        color: "white"
    }
}

class BookList extends Component {
    render() {
        return (
                <div style={bookEditor.styles}>
                    <h1 style={availableHeader.styles}>Books Available: </h1>
                    <div>
                        {this.props.books.map(book =>
                            <Card key={book.id} value={book.id} body inverse color="primary">
                                <CardTitle>{book.title}</CardTitle>
                                <CardTitle>{book.author}</CardTitle>
                                <CardTitle>${book.price}</CardTitle>
                                <CardText>{book.description}</CardText>
                                <Button onClick={() => this.props.addBookToCart(book.id)} color="secondary">Add To Cart</Button>
                            </Card>
                        )}
                    </div>
                </div>
             );
        }
    }









export default BookList;