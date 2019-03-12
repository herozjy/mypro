import React, {Component} from 'react';
import {Icon} from "antd"
import {Link} from "react-router-dom";
import '../../asset/css/FriendsNav/FriendsNav.css';
class FriendsNav extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <ul className={"FriendsNav"}>
                <li>
                    朋友
                </li>
                <li>
                    <Icon type="search" />
                    <Icon type="team" />
                    <Icon type="plus" />
                </li>
            </ul>
        )
    }

}

export default FriendsNav; //只能有有一个

