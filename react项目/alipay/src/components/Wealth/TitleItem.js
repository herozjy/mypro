import React, {Component} from 'react';
import "../../asset/css/Wealth/TitleItem.css"
import {Link} from "react-router-dom"
class TitleItem extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"TitleItem"}>
                <Link to={"/"}>
                    <span>
                        {this.props.title}
                    </span>
                    <span>
                        更多
                    </span>
                </Link>

            </div>
        )
    }

}

export default TitleItem; //只能有有一个

