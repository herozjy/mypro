import React, {Component} from 'react';
import "../../asset/css/Shop/ZhenXuan.css";
class ZhenXuan extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <ul className={"ZhenXuan"}>
                <li>
                    <img src={`${require("../../asset/images/zhenxuan_big.png")}`} alt=""/>

                </li>
              <li>
                  <div>
                      <img src={`${require("../../asset/images/zhenxuan.png")}`} alt=""/>
                  </div>
                  <div className={"ShopRobs_title"}>
                      汉堡王(华南)
                  </div>
                  <div className={"ShopRobs_info"}>
                      [限时49折]巧克力
                  </div>
                  <div className={"ShopRobs_price"}>
                      <span>10元 </span>
                      <span>20.5元 </span>
                  </div>
              </li>
            </ul>
        )
    }

}

export default ZhenXuan; //只能有有一个

