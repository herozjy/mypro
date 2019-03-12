import React, {Component} from 'react';
import { Input ,Icon} from 'antd';
import {Link,Route} from "react-router-dom"

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"home_nav"}>
                <div className={"home_nav_part1 "}>
                   <Input
                        placeholder="阿里体育"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}

                        suffix={<Icon type="thunderbolt" theme="filled"  style={{ color: 'rgba(0,0,0,.25)' }} />}
                        // value={userName}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                    <Icon type="user-add" />
                    <Icon type="plus" />

                </div>
                <ul className={"home_nav_part2"}>
                    <li>
                        <Link to={'/home/scan'}>
                            <Icon type="scan" />
                            <p>扫一扫</p>
                        </Link>

                    </li>
                    <li>
                        <Link to={'/home/moneycollect'}>
                        <Icon type="barcode" />
                        <p>付钱</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/home/barcode'}>
                        <Icon type="money-collect" />
                        <p>收钱</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/home/creditcard'}>
                        <Icon type="credit-card" />
                        <p>卡包</p>
                        </Link>
                    </li>
                </ul>





            </div>
        )
    }

}

export default Nav; //只能有有一个

