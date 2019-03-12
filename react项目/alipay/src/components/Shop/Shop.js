import React, {Component} from 'react';
import Footer from "../Footer.js";
import ShopTop from "./ShopTop.js";
import Shop_Carousel from "./Shop_Carousel.js";
import ShopApp from "./ShopApp.js";
import PublicPraise from "./PublicPraise.js";
import ShopRobs from "./ShopRobs.js";
import ZhenXuan from "./ZhenXuan.js";
import CustomMade from "./CustomMade.js";
class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <ShopTop/>
                <Shop_Carousel/>
                <ShopApp/>
                <PublicPraise/>
                <h4 style={{
                    margin:"0.4rem 1.5rem"
                }}>超值抢购</h4>
                <ShopRobs/>

                <h4 style={{
                    margin:"0.4rem 1.5rem"
                }}>大牌臻选</h4>
                <ZhenXuan/>
               <ShopRobs/>
                <div style={{
                    margin:"0.4rem 1.5rem"
                }}>
                    <h4 style={{
                        display:"inline-block"
                    }}>为你定制</h4>
                    <span style={{
                        color:"#787878",
                        fontSize:12,
                        marginLeft:10
                    }}
                    >夜已深,我有酒你有故事吗？</span>

                </div>
                <CustomMade/>
                <Footer/>
            </div>
        )
    }

}

export default Shop; //只能有有一个

