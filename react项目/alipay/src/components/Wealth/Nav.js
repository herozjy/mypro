import React, {Component} from 'react';
import "../../asset/css/Wealth/Nav.css"
import {Icon} from "antd"
import {Link} from "react-router-dom";
import axios from "axios"

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: ""
        }

    }
    componentDidMount(){
        axios.get("http://localhost/myAlipay/isShow.php")
            .then((response)=> {
                // handle success
                console.log(response.data);
                this.setState({
                    isShow:response.data
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    handlerClickEye = () => {
            axios.get("http://localhost/myAlipay/isShow.php?isshow="+this.state.isShow)
            .then((response)=> {
                // handle success
                console.log(response.data);
                this.setState({
                    isShow:!this.state.isShow
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        return (
            <div className={"Nav_main"}>
                <div className={"Nav_main_top"}>
                    <span>财富</span>
                    <span>
                        <Link to={"/"}>
                              <Icon type="search"/>
                        </Link>
                    </span>
                </div>

                <div className={"Nav_main_content"}>
                    <Link to={"/"}>
                        <dl>
                            <dt>总资产(元)</dt>
                            <dt><Icon type="safety"/>保障中</dt>
                            <dd>
                                {this.state.isShow ?
                                    88888.88 :" ****.*"
                                }
                            </dd>
                        </dl>
                    </Link>
                    <dl>
                        <Link to={"/"}>
                            <dt>昨日收益</dt>
                        </Link>

                        <dt onClick={this.handlerClickEye}>
                            {this.state.isShow ?
                                <Icon type="eye"/>
                                : <Icon type="eye-invisible"/>
                            }


                        </dt>
                        <Link to={"/"}>
                            <dd>
                                {this.state.isShow ?
                                    8.88 :" **.*"
                                }

                            </dd>
                        </Link>
                    </dl>
                    <Link to={"/"}>
                        <div className={"Nav_main_content_arrow"}><Icon type="right"/></div>
                    </Link>

                </div>


                <div className={"Nav_main_footer"}>
                    <span>
                        <Link to={"/"}>
                            余额宝
                        </Link>
                    </span>
                    <span>
                        <Link to={"/"}>
                            客官别急
                        </Link>
                    </span>
                </div>
            </div>
        )
    }

}

export default Nav; //只能有有一个

