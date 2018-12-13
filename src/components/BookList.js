import React, { Component } from 'react'
import book from './Book.js'
import { Card, Button, CardTitle, CardText } from 'reactstrap'

const bookEditor = {
    styles: {
        width: "30%",
        marginTop: "2%"
    }
}

class BookList extends Component {
    render () {
        return (
            <div>
            <h1>Books Available: </h1>
            <div style={bookEditor.styles}>
            {this.props.books.map(book => 
            <Card key={book.id} value={book.id} body inverse color="primary">
                <CardTitle>{book.title}</CardTitle>
                <CardTitle>{book.author}</CardTitle>
                <CardTitle>${book.price}</CardTitle>
                <CardText>{book.description}</CardText>
                <Button color="secondary">Add To Cart</Button>
            </Card>
      )}
            </div>
         </div>
        );
    }
}









export default BookList;