import React, {Component} from 'react';
import "../../asset/css/FirstPage/MyApps.css";
import {Link, Route} from "react-router-dom";
import {Icon} from "antd";
import axios from "axios"


const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class MyApps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appData: [],
        }

    }

    componentDidMount() {
        axios.get("http://localhost/myAlipay/appData.php")
            .then((respose) => {
                this.setState({
                    appData: respose.data,
                })
            })
            .catch((err) => {
                console.log(err)
            })

    }


    render() {
        var count = 0;
        return (
            <div>
                <ul className={"MyApps"}>


                        {
                            this.state.appData.map((value, key) => {

                                if (Number(value.isCheck)) {
                                    count++;
                                    if (count>=12){
                                        return <div/>
                                    }
                                    return (
                                          <li key={key}>
                                              {
                                                  count < 12 ?

                                                  (
                                                    <Link to={"/"}>
                                                        <Icon type={value.type}/>
                                                        <p>{value.title}</p>
                                                    </Link>
                                                  ) :""
                                                                                                    }
                                          </li>
                                    )
                                }
                            })


                        }

                    <li>
                        <Link to={"/myappsIndex"}>
                            <Icon type="appstore" theme="filled"/>
                            <p>更多</p>
                        </Link>
                    </li>

                </ul>

            </div>
        )
    }

}

export default MyApps; //只能有有一个

