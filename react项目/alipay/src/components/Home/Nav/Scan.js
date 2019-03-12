import React, {Component} from 'react';
import  BackArrow from '../../BackArrow'
class Scan extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                扫一扫
                <BackArrow></BackArrow>
            </div>
        )
    }

}

export default Scan; //只能有有一个

