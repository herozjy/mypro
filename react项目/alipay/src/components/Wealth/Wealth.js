import React, {Component} from 'react';
import Footer from "../Footer.js";
import Nav from "./Nav.js"
import Products from "./Products"
import TitleItem from "./TitleItem"
import Service from "./Service"
import Financing from "./Financing"
import WealthLike from "./WealthLike"
import WealthFooter from "./WealthFooter"
class Wealth extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div >
                <Nav/>
                <Products/>
                <div style={
                    { width:"100%",
                        height:95,
                        marginTop:10,
                        marginBottom:10,
                    }
                }>
                    <img style={
                        {
                            width:"100%",
                            height:"100%"
                        }
                    } src={`${require('../../asset/images/Wealth_1.png')}`} alt=""/>
                </div>
                <TitleItem title={"为理财潜力股优选"} />
                <Service/>
                <TitleItem title={"适合你的理财服务"} />
                <Financing/>
                <TitleItem title={"理财潜力股都在看"} />
                <WealthLike/>
                <WealthFooter/>
                <Footer/>
            </div>
        )
    }

}

export default Wealth; //只能有有一个

