import React, {Component} from 'react';
import Footer from "../Footer.js";
import MyTop from "./MyTop.js";
import MyMain from "./MyMain.js";
class My extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <MyTop/>
                <MyMain/>
                <Footer/>
            </div>
        )
    }

}

export default My; //只能有有一个

