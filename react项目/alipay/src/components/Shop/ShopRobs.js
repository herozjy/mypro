import React, {Component} from 'react';
import "../../asset/css/Shop/ShopRobs.css";

const data =[
    {
        images:require("../../asset/images/ShopRobs_1.png"),
        price1:8.90,
        price2:19.90,
        title:"百果园",
        info:"[2斤] A-级进口香蕉"
    },
    {
        images:require("../../asset/images/ShopRobs_2.png"),
        price1:139,
        price2:278,
        title:"安德鲁森",
        info:"C08爱的诚意10号"
    },
    {
        images:require("../../asset/images/ShopRobs_3.png"),
        price1:70,
        price2:140,
        title:"必胜客",
        info:"5折披萨组合 炙烤奥尔良"
    },

]
class ShopRobs extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"ShopRobs"}>

                <ul>
                    {
                        data.map((value,key)=>{
                            return(
                                <li key={key}>
                                   <div>
                                       <img src={`${value.images}`} alt=""/>
                                   </div>
                                    <div className={"ShopRobs_title"}>
                                        {value.title}
                                    </div>
                                    <div className={"ShopRobs_info"}>
                                        {value.info}
                                    </div>
                                    <div className={"ShopRobs_price"}>
                                        <span>{value.price1}元 </span>

                                        <span>{value.price2}元 </span>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }

}

export default ShopRobs; //只能有有一个

