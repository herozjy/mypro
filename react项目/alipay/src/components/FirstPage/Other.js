import React, {Component} from 'react';
import "../../asset/css/FirstPage/Other.css"
import {Link} from "react-router-dom"




class Other extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <div>
                    <div className={"other_tip"}>
                        <span>没有找到需要的的？搜一下试试</span>
                    </div>
                    <div className={"other_search"}>
                        <Link to={"/"}> <span>余额宝</span></Link>
                        <Link to={"/"}> <span>奖励金</span></Link>
                        <Link to={"/"}> <span>余利宝</span></Link>

                    </div>
                </div>
            </div>
        )
    }

}

export default Other; //只能有有一个

