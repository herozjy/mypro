import React, {Component} from 'react';
import "../../asset/css/Wealth/Service.css"
import {Link} from "react-router-dom"
import{Icon} from "antd"
class Service extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"Service"}>
                <div>
                    <img src={`${require('../../asset/images/Wealth_2.png')}`} alt=""/>
                </div>
               <div className={"Service_main"}>
                   <Link to={"/"}>
                       <dl>
                           <dt>
                               <Icon type="bar-chart" />
                           </dt>
                           <dd>
                               <div>稳健理财</div>
                               <div>期限活 好掌握</div>
                           </dd>
                       </dl>
                   </Link>
                   <Link to={"/"}>
                   <dl>
                       <dt>
                           <Icon type="rise" />
                       </dt>
                       <dd>
                           <div>浮动收益</div>
                           <div>知热点 选好基</div>
                       </dd>
                   </dl>
                   </Link>
               </div>
            </div>
        )
    }

}

export default Service; //只能有有一个

