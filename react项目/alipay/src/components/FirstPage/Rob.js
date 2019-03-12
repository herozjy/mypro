import React, {Component} from 'react';
import "../../asset/css/FirstPage/Rob.css";
import {Link} from 'react-router-dom'
import {Icon} from "antd"
const robs = [
    {
        images :require('../../asset/images/rob_1.png'),
        title: "薄荷太阳花",
        price:4.2
    },
    {
        images :require('../../asset/images/rob_2.png'),
        title: "厕所卫生纸",
        price:12.1
    },
    {
        images :require('../../asset/images/rob_3.png'),
        title: "麻辣烫火锅",
        price:9.2
    },
    {
        images :require('../../asset/images/rob_4.png'),
        title: "精硫莱卡棉",
        price:8.4
    },
    {
        images :require('../../asset/images/rob_5.png'),
        title: "外套男",
        price:45.9
    },
    {
        images :require('../../asset/images/rob_6.png'),
        title: "Joytop",
        price:31.8
    },
]


class Rob extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"robs"}>
                <div className={"robs_title"}><span>每日必强</span><span>淘宝提供服务</span></div>
                <div>
                    <ul className={"robs_ul"}>
                        {
                            robs.map((value,key)=>{
                                return(
                                    <li key={key}>
                                       <Link to={"/"}>
                                           <div><img src={`${value.images}`} alt=""/></div>
                                           <div className={"robs_shop_title"}>{value.title}</div>
                                           <div className={"robs_shop_price"}><span>拼团价</span><span>{value.price}元</span></div>
                                       </Link>
                                    </li>
                                )
                            })
                        }


                        <div className={"robs_footer"}>
                            <Link to={"/"}>
                                <span>查看更多拼团</span>
                                <span><Icon type="right" /></span>
                            </Link>
                        </div>
                    </ul>


                </div>
            </div>
        )
    }

}

export default Rob; //只能有有一个

