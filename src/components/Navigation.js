import React, { Component } from 'react';

const navigationStyle = {
    height: "300px",
    width: "200px",
    backgroundColor: "blue",
    margin: "15px 15px 0px 0px",
    display: "inline-block",
}

class Navigation extends Component {
    render () {
        return (
            <div style={navigationStyle}></div>
        );
    };
}

export default Navigation;