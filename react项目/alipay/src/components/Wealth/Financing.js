import React, {Component} from 'react';
import "../../asset/css/Wealth/Financing.css"
import {Link} from "react-router-dom"

class Financing extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <div className={"Financing"}>
                <div className={"Financing_box"}>

                    <div className={"Financing_big"}>
                        <img src={`${require('../../asset/images/Wealth_4.png')}`} alt=""/>
                    </div>
                    <div className={"Financing_small"}>
                        <ul>
                            <Link to={"/"}>
                                <li>
                                    <img src={`${require('../../asset/images/Wealth_5.png')}`} alt=""/>
                                </li>
                                <li>自选基金</li>
                                <li>涨跌随时看</li>
                            </Link>
                        </ul>
                        <ul>
                            <Link to={"/"}>
                            <li>
                                <img src={`${require('../../asset/images/Wealth_6.png')}`} alt=""/>
                            </li>
                            <li>蚂蚁星源</li>
                            <li>攒出更好的自己</li>
                            </Link>
                        </ul>
                        <ul>
                            <Link to={"/"}>
                            <li>
                                <img src={`${require('../../asset/images/Wealth_7.png')}`} alt=""/>
                            </li>
                            <li>小钱袋</li>
                            <li>儿童版余额宝</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Financing; //只能有有一个

