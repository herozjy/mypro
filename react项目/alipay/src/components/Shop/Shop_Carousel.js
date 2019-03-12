import React, {Component} from 'react';
import "../../asset/css/Shop/Shop_Carousel.css";
import { Carousel } from 'antd';
class Shop_Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"Shop_Carousel"}>
                <Carousel autoplay>
                    <div>
                        <img src={`${require("../../asset/images/Shop_Carousel_.png")}`} alt=""/>

                    </div>
                    <div>  <img src={`${require("../../asset/images/Shop_Carousel_.png")}`} alt=""/></div>
                    <div>  <img src={`${require("../../asset/images/Shop_Carousel_.png")}`} alt=""/></div>
                    <div>  <img src={`${require("../../asset/images/Shop_Carousel_.png")}`} alt=""/></div>
                </Carousel>,
            </div>
        )
    }

}

export default Shop_Carousel; //只能有有一个

