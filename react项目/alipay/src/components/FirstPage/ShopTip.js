import React, {Component} from 'react';
import "../../asset/css/FirstPage/ShopTip.css";
import {Link} from "react-router-dom";
import {Icon, Row, Col} from "antd";

class ShopTip extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <div className={"ShopTip"}>
                <Link to={'#'}>
                    <Row>
                        <Col span={4}> <Icon type="ant-design"/></Col>
                        <Col span={16}>
                            <div><span>又有好友收了你的绿色能量</span> <span style={{
                                marginLeft:12,
                                color:'#b7b7b7'
                            }}> 2小时前</span></div>
                            <div><span>完成饲料任务获得饲料</span> <span  style={{
                                marginLeft:12,
                                color:'#b7b7b7'
                            }}> 8小时前</span></div></Col>
                        <Col span={4}><Icon type="right"/></Col>
                    </Row>
                </Link>
            </div>
        )
    }

}

export default ShopTip; //只能有有一个

