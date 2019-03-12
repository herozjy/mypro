import React, {Component} from 'react';
import '../../asset/css/FriendsNav/FriendsTop.css';

const data = [
    {
        images: require("../../asset/images/FriendsTop_1.png"),
        title: "生活号",
        title_small: "简单生活更多优惠"
    },
    {
        images: require("../../asset/images/FriendsTop_2.png"),
        title: "小程序",
        title_small: "发现更多服务"
    },
    {
        images: require("../../asset/images/FriendsTop_3.png"),
        title: "生活圈",
        title_small: "和朋友分享生活"
    },

];

class FriendsTop extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (
            <ul className={"FriendsTop"}>
                {
                    data.map((value, key)=>{
                        return (
                            <li key={key}>
                                <div>
                                    <img src={`${value.images}`} alt=""/>
                                </div>
                                <div className={"FriendsTop_title"}>
                                    {value.title}
                                </div>
                                <div className={"FriendsTop_title_small"}>
                                    {value.title_small}
                                </div>
                            </li>
                        )

                    })
                }
            </ul>
        )
    }

}

export default FriendsTop; //只能有有一个

