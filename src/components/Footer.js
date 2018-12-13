import React, { Component } from 'react'

const footer = {
    styles: {
        fontSize: "30px",
        color: "white",
        backgroundColor: "brown",

    }
}

class Footer extends Component {
    render() {
        return (
            <h2 style={footer.styles}>&copy; 2018</h2>
        )
    }
}










export default Footer;