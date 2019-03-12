import React, {Component} from 'react';
import "../../asset/css/Wealth/WealthLike.css"
import {Link} from "react-router-dom";

const LikeData =[
    {
        images: require('../../asset/images/Wealth_like_1.png'),
        title:"银行预留的手机号码，不去银行可以改吗？",
        num :"121110",
        praise:339
    },
    {
        images: require('../../asset/images/Wealth_like_2.png'),
        title:"抽中两部IPhone X 兑奖遭拒 银行：补偿50元",
        num :"100000",
        praise:362
    },
    {
        images: require('../../asset/images/Wealth_like_2.png'),
        title:"一年狂卖20亿 小罐茶背后的“大师”们究竟在忙啥？",
        num :"9999",
        praise:339
    },
]
class WealthLike extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={'WealthLike'}>
                {

                    LikeData.map(
                        (value, key)=>{
                            return(
                                <dl key={key}>
                                    <Link to={"/"}>
                                        <dt >
                                            <img src={`${value.images}`} alt=""/>
                                        </dt>
                                        <dd>
                                            <div>
                                                {value.title}
                                            </div>
                                            <div>
                                                {
                                                    value.num>10000 ? <span>{ parseInt(value.num/10000)}+万阅读 </span>
                                                        : <span>{value.num}阅读 </span>
                                                }
                                                <span>{value.praise}评论 推荐</span>
                                            </div>
                                        </dd>
                                    </Link>
                                </dl>
                            )
                        }
                    )

                }


            </div>
        )
    }

}

export default WealthLike; //只能有有一个

