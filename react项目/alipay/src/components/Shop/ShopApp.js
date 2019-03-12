import React, {Component} from 'react';
import "../../asset/css/Shop/ShopApp.css"
import  {Icon} from "antd"
const  data=[
    {
        type:"android",
        title:"安卓"
    },
    {
        type:"apple",
        title:"苹果"
    },

    {
        type:"windows",
        title:"windows"
    },

    {
        type:"chrome",
        title:"谷歌"
    },

    {
        type:"weibo",
        title:"微博"
    },

    {
        type:"wechat",
        title:"微信"
    },

    {
        type:"zhihu",
        title:"知乎"
    },
    {
        type:"yuque",
        title:"余缺"
    },
    {
        type:"dingding",
        title:"钉钉"
    },
    {
        type:"appstore",
        title:"更多"
    },


];
class ShopApp extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <ul className={"ShopApp"}>
                {
                    data.map((value,key)=>{
                        return(
                            <li key={key}>
                               <div> <Icon type={value.type}/></div>
                                <div>{value.title}</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}

export default ShopApp; //只能有有一个

