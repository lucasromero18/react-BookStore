import React, { Component } from 'react';
import './App.css';
import Nav from'./components/navbar.js'
import Search from './components/search.js'
import BookList from'./components/BookList.js'
import Cart from './components/Cart.js'
import Total from './components/total.js'
import Footer from'./components/Footer.js'

class App extends Component {
  state = {
    CartItems: [],
    books: []
  }

  async componentDidMount () {
    const res = await fetch('http://localhost:8082/api/books')
    const json = await res.json()
    this.setState({books: json})
  }

  render() {
    console.log(this.state.books)
    return (
      <>
      <Nav />
      <Search />
      <BookList books={this.state.books}/>
      <Cart />
      <Footer />
      </>
    );
  }
}

export default App;
