import styles from "./Main.module.css";
import React, { Component } from "react";

const styleAdvertisement = {
    height: "120px",
    width: "660px",
    backgroundColor: "purple",
    margin: "15px 10px"
};

class Main extends Component {
    render () {
        return (
            <div className={styles.main}>
                {this.props.children}
                <div style={ styleAdvertisement}></div>
            </div>
            
        )
    }
}

export default Main;