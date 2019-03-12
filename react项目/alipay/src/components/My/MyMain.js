import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../../asset/css/My/MyMain.css"
import {Icon} from "antd";

const data = [
    {
        name:"part1",
        data: [
            {
                title: "支付宝会员",
                type: "alipay",
                tip: "6个积分待领取",
            },
        ]
    },
    {  name:"part2",
        data: [
            {
                title: "账单",
                type: "copy",
                tip: "",
            },
            {
                title: "总资产",
                type: "copy",
                tip: "账户安全保障中",
            },
            {
                title: "余额",
                type: "copy",
                tip: "00.0",
            },
            {
                title: "余额宝",
                type: "copy",
                tip: "",
            },
            {
                title: "花呗",
                type: "copy",
                tip: "",
            },
            {
                title: "银行卡",
                type: "copy",
                tip: "",
            },
        ]
    },
    {  name:"part3",
        data: [
            {
                title: "芝麻信用",
                type: "copy",
                tip: "",
            },
            {
                title: "蚂蚁保险",
                type: "copy",
                tip: "相互宝邀好友得红包",
            },
            {
                title: "蚂蚁借呗",
                type: "copy",
                tip: "",
            },
            {
                title: "网商银行",
                type: "copy",
                tip: "",
            },
        ]
    },
    {  name:"part4",
        data: [
            {
                title: "支付宝公益",
                type: "copy",
                tip: "",
            },
            {
                title: "我的客服",
                type: "copy",
                tip: "",
            }
        ]
    },

];

class MyMain extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <div className={"MyMain"}>

                {
                    data.map((value, key)=>{
                        return(
                            <ul key={key} className={"MyMain_ul"}>

                                {
                                    value.data.map((v,k)=>{
                                        return(
                                            <li key={k}>
                                                <dl className={"MyMain_dl"}>
                                                    <dt>
                                                        <Icon type={v.type}/>
                                                        <div>{v.title}</div>
                                                    </dt>
                                                    <dd>
                                                        <span> {v.tip}
                                                       &nbsp;&nbsp;</span>
                                                        <Icon type={"right"}/>
                                                    </dd>

                                                </dl>
                                            </li>
                                        )
                                    })
                                }


                            </ul>
                        )
                        }

                    )
                }



            </div>
        )
    }

}

export default MyMain; //只能有有一个

