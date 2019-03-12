import React, {Component} from 'react';
import { Carousel } from 'antd';
import {Link}from 'react-router-dom'
import "../../asset/css/FirstPage/FirstPageCarousel.css";



class FirstPageCarousel  extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"FirstPageCarousel"}>


                <Carousel autoplay>
                    <div>
                        <Link to={"#"}>
                        <img src={`${require("../../asset/images/FirstPageCarousel_1.png")}`} alt=""/>
                        </Link>
                    </div>
                    <div>
                        <Link to={"#"}>
                        <img src={`${require("../../asset/images/FirstPageCarousel_2.png")}`} alt=""/>
                        </Link>
                    </div>
                    <div>
                        <Link to={"#"}>
                        <img src={`${require("../../asset/images/FirstPageCarousel_3.png")}`} alt=""/>
                        </Link>
                    </div>
                </Carousel>
            </div>
        )
    }

}

export default FirstPageCarousel ; //只能有有一个

