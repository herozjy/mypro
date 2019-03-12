import React, {Component} from 'react';
import { Icon } from 'antd';
import {Link,Route}  from "react-router-dom";
import '../asset/css/FirstPage/Footer.css';
import routes from "../routers/routers"

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
           <div>

               <div className={"footer"}>
                   <ul className={"anticons-list"}>
                       <li>
                           <Link to='/'>
                               <Icon type="alipay-circle" />
                               <p>首页</p>
                           </Link>
                       </li>
                       <li>
                           <Link to='/wealth'>
                               <Icon type="red-envelope" />
                               <p>财富</p>
                           </Link>
                       </li>
                       <li>
                           <Link to='/shop'>
                               <Icon type="taobao-circle" />
                               <p>淘宝</p>
                           </Link>
                       </li>
                       <li>
                           <Link to='/friends'>
                               <Icon type="team" />
                               <p>朋友</p>
                           </Link>
                       </li>
                       <li>
                           <Link to='/my'>
                               <Icon type="user" />
                               <p>我的</p>
                           </Link>
                       </li>

                   </ul>
               </div>

           </div>
        )
    }

}

export default Footer; //只能有有一个

