import React, {Component} from 'react';
import '../../asset/css/FriendsNav/FriendsContent.css';

const data = [
    {
        images: require("../../asset/images/FriendsTip_1.png"),
        title: "服务提醒(含支付宝助手)",
        title_small: "简单生活更多优惠",
        time: "上午 11:18"
    },
    {
        images: require("../../asset/images/FriendsTip_2.png"),
        title: "地球人",
        title_small: "这是一条转账通知",
        time: "1月16日"
    },
    {
        images: require("../../asset/images/FriendsTip_3.png"),
        title: "我的客服",
        title_small: "恭喜你成功领取****欧拉欧拉！为你奉上最全",
        time: "1月15日"
    },

];

class FriendsContent extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <ul className={"FriendsContent"}>
                {
                    data.map((value, key) => {
                        return (
                            <li key={key}>
                                <div className={"FriendsContent_left"}>
                                    <img src={`${value.images}`} alt=""/>
                                </div>

                                <div className={"FriendsContent_right"}>
                                    <div className={"FriendsContent_right_l"}>
                                        <div> {value.title}</div>
                                        <div>{value.title_small}</div>
                                    </div>
                                    <div className={"FriendsContent_right_r"}>
                                        {value.time}
                                    </div>
                                </div>

                            </li>
                        )

                    })
                }
            </ul>
        )
    }

}

export default FriendsContent; //只能有有一个

