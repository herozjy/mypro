import React, {Component} from 'react';
import "../../asset/css/Wealth/Products.css"
import {Icon} from "antd"
import {Link} from "react-router-dom"

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClick:false,
            height:70
        }

    }
    handlerClick =()=>{
        var height = this.state.isClick ?70:140
        this.setState({
            isClick:!this.state.isClick,
            height:height
        })
    }
    render() {
        return (
            <div className={"Products"}>
                <ul style={
                    {
                        height:this.state.height
                    }
                }>
                    <li>
                        <Link to={"/"}>
                            <div><Icon type="area-chart"/></div>
                            <div>股票</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                            <div><Icon type="rise"/></div>
                            <div>基金</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                            <div><Icon type="alipay"/></div>
                            <div>支付宝</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                            <div><Icon type="fall"/></div>
                            <div>定期</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                            <div><Icon type="heat-map"/></div>
                            <div>黄金</div>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/"}>
                            <div><Icon type="html5"/></div>
                            <div>养老</div>
                        </Link>
                    </li>
                </ul>
                <div className={"Products_down_arrow"} onClick={this.handlerClick}>
                    <div style={{
                        borderBottom: "1px solid #e3e3e3"
                    }}>
                        {
                            this.state.isClick?<Icon type="up" />:<Icon type="down" />
                        }

                    </div>

                </div>
            </div>
        )
    }

}

export default Products; //只能有有一个

