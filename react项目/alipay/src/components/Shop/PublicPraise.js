import React, {Component} from 'react';
import "../../asset/css/Shop/PublicPraise.css";
class PublicPraise extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"PublicPraise"}>
                <h4>口碑App专享</h4>
                <ul>
                    <li>
                        <img src={`${require("../../asset/images/praise_1.png")}`} alt=""/>
                    </li>
                    <li>
                        <img src={`${require("../../asset/images/praise_2.png")}`} alt=""/>
                    </li>
                    <li>
                        <img src={`${require("../../asset/images/praise_3.png")}`} alt=""/>
                    </li>
                    <li>
                        <img src={`${require("../../asset/images/praise_4.png")}`} alt=""/>
                    </li>
                </ul>
            </div>
        )
    }

}

export default PublicPraise; //只能有有一个

