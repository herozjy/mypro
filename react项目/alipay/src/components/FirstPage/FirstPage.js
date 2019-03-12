import React, {Component} from 'react';
import Nav  from "../Home/Nav";
import Footer from "../Footer.js";
import MyApps from "./MyApps"
import ShopTip from "./ShopTip"
import FirstPageCarousel from "./FirstPageCarousel"
import FirstPageContent from "./FirstPageContent"
import Rob from "./Rob"
import Other from "./Other"
class FirstPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <Nav />
                <MyApps/>
                <div style={{
                    backgroundColor: "#eaeaea",
                    height :10
                }}> </div>
                <ShopTip/>
                <div style={{
                    backgroundColor: "#eaeaea",
                    height :8
                }}> </div>
                <FirstPageCarousel/>
                <div style={{
                    backgroundColor: "#eaeaea",
                    height :8
                }}> </div>
                <FirstPageContent/>
                <Rob/>
                <Other/>
                <Footer/>
            </div>
        )
    }

}

export default FirstPage; //只能有有一个

