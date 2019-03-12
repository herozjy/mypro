import React, {Component} from 'react';
import  {Link} from "react-router-dom"
import {Icon} from "antd"
class BackArrow extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    static defaultProps={
        topath:"/"
    };
    render() {
        return (
            <div className={'BackArrow'}>
                <Link to={this.props.topath}>
                    <Icon type="left" />
                </Link>
            </div>
        )
    }

}

export default BackArrow; //只能有有一个

