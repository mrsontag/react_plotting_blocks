import React, { Component } from "react";
import styles from "./Header.module.css";

class Header extends Component {
    render() {
        return (
            <div className = { styles.header }>This is the header block.</div>
        );
    };
};

export default Header;