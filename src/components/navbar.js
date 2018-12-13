import React, { Component } from 'react'

const headerStyle = {
    styles: {
        color: "white",
        backgroundColor: "brown",
        textAlign: "center",
        fontSize: "50px"
    }
}

class Nav extends Component {
    render () {
        return (
            <h2 style={headerStyle.styles}>Bookstore</h2>
        )
    }
}







export default Nav;