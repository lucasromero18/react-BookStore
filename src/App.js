import React, { Component } from 'react';
import './App.css';
import Nav from'./components/navbar.js'
import Search from './components/search.js'
import BookList from'./components/BookList.js'
import Cart from './components/Cart.js'
import Footer from'./components/Footer.js'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  state = {
    CartItems: [],
    books: [],
    total: 0 ,
    filteredBook: ' '
  }

  async componentDidMount () {
    const res = await fetch('http://localhost:8082/api/books')
    const json = await res.json()
    this.setState({books: json})
  }

  filterBookSearch = (e) => {
    this.setState ({                              // does the books title contain e.target.value?
      filteredBook: e.target.value
    })
  }

  addBookToCart = (id) => {
    const individualBook = this.state.books.filter(book => book.id === id)
    console.log(individualBook)
    this.setState(prevState => {
      let CartItems = this.state.CartItems
      for(let i = 0; i < this.state.books.length; i++){
        if(this.state.books[i].id === id){
          CartItems.push(this.state.books[i])
        }
      }
      return {CartItems};
    })
    setTimeout(()=>{
      console.log(this.state);
    }, 1000)
}

  render() {
    return (
      <>
      <Nav />
      <Search filterBookSearch={this.filterBookSearch}/>
      <Row>
        <BookList books={this.state.books.filter(book => book.title.includes(this.state.filteredBook))} addBookToCart={this.addBookToCart}/> 
        <Cart CartItems={this.state.CartItems} />
      </Row>
      <Footer />
      </>
    );
  }
}

export default App;
