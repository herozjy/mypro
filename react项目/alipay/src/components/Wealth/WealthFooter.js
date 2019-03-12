import React, {Component} from 'react';
import "../../asset/css/Wealth/WealthFooter.css"
import {Link} from "react-router-dom";
class WealthFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"WealthFooter"}>
                <div className={"WealthFooter_1"}>
                    <img src={`${require('../../asset/images/WealthFooter.png')}`} alt=""/>
                </div>
                <div className={"WealthFooter_2"}>
                    过往业绩不预示产品未来表现，市场有风险。投资需谨慎 >
                </div>
            </div>
        )
    }

}

export default WealthFooter; //只能有有一个

