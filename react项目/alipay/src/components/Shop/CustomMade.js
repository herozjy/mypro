import React, {Component} from 'react';
import "../../asset/css/Shop/CustomMade.css"
import {axios} from "axios";

const data = [
    {
        images: require("../../asset/images/CustomMade_1.png"),
        price1: 53,
        price2: 55,
        title: "55元代金券",
        shoper: "糖巢",
        num: 7,
        distance: 106
    },
    {
        images: require("../../asset/images/CustomMade_2.png"),
        price1: 138,
        price2: 214,
        title: "特色双人餐",
        shoper: "潮辣矿泉水火锅",
        num: 21,
        distance: 617
    },
    {
        images: require("../../asset/images/CustomMade_3.png"),
        price1: 10,
        price2: 23,
        title: "[热卖]超值鸡肉卷套餐",
        shoper: "华莱士",
        num: 8,
        distance: 703
    },
    {
        images: require("../../asset/images/CustomMade_4.png"),
        price1: 268,
        price2: 301,
        title: "经典双人套餐",
        shoper: "和牛焱",
        num: 6,
        distance: 624
    },
    {
        images: require("../../asset/images/CustomMade_5.png"),
        price1: 89.9,
        price2: 110,
        title: "招牌2-3人套餐",
        shoper: "小叫天泡椒活田鸡",
        num: 365,
        distance: 1234
    },
]

class CustomMade extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <div className={"CustomMade"}>
                <ul>
                    {
                        data.map((value, key) => {
                            return (
                                <li key={key}>
                                    <div className={"CustomMade_left"}>
                                        <img src={`${value.images}`} alt=""/>
                                    </div>
                                    <div  className={"CustomMade_right"}>
                                        <div className={"CustomMade_right_l"}>
                                            <div className={"CustomMade_right_l_title"}>{value.title}</div>
                                            <div className={"CustomMade_right_l_shoper"}>{value.shoper}</div>
                                            <div className={"CustomMade_right_l_price"}>
                                                <span>{value.price1}元</span>
                                                <span>{value.price2}元</span>
                                            </div>
                                           <div className={"CustomMade_right_l_num"}>
                                               已售{value.num}份
                                           </div>
                                        </div>
                                        <div className={"CustomMade_right_r"}>

                                            <div>{value.distance >= 1000 ?
                                                (value.distance / 1000).toFixed(1) + "km"
                                                : value.distance + "m"}
                                            </div>

                                        </div>
                                    </div>

                                </li>


                            )
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default CustomMade; //只能有有一个

