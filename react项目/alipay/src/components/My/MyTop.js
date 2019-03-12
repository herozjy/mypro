import React, {Component} from 'react';
import  {Link} from "react-router-dom";
import  "../../asset/css/My/MyTop.css"
import {Icon} from "antd";


class MyTop extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"MyTop"}>
                <div className={"MyTop_title"}>
                    <span>我的</span>
                    <span>设置</span>
                </div>
                <ul>
                   <li>
                       <img src={`${require('../../asset/images/MyPhoto.png')}`} alt=""/>
                   </li>
                    <li>
                      <div className={"MyTop_li_left"}>
                          <div className={"MyTop_li_1"}>
                              <span>你的名字</span>
                              <span>未设置昵称</span>
                          </div>
                          <div className={"MyTop_li_2"}>
                              nideyouxiangdizhi@xxx.xxx
                          </div>
                      </div>
                        <div className={"MyTop_li_right"}>
                            <Icon type={"right"}/>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

}

export default MyTop; //只能有有一个

