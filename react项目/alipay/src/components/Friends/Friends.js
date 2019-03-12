import React, {Component} from 'react';
import Footer from "../Footer.js";
import FriendsNav from "./FriendsNav.js";
import FriendsTop from "./FriendsTop.js";
import FriendsContent from "./FriendsContent.js";

class Friends extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <FriendsNav/>
                <FriendsTop/>
                <FriendsContent/>
                <Footer/>
            </div>

        )
    }

}

export default Friends; //只能有有一个

