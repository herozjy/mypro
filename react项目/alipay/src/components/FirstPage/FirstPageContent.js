import React, {Component} from 'react';
import  "../../asset/css/FirstPage/FirstPageCentent.css"
const contentAll =[
    {
        title:"惠支付",
        contentAll :[
            {
                content_1 :"可以抵钱花",
                content_2 :"天天领元宝",
                images:require("../../asset/images/FirstPageAlipay_1.png")
            },
            {
                content_1 :"挣钱红包升级",
                content_2 :"*份赏金到手",
                images:require("../../asset/images/FirstPageAlipay_2.png")
            },

        ]
    },
    {
        title:"生活服务",
        contentAll :[
            {
                content_1 :"体检查什么？",
                content_2 :"跟年龄做规划",
                images:require("../../asset/images/FirstPageAlipay_3.png")
            },
            {
                content_1 :"膳食纤维虽好",
                content_2 :"但需掌握正确吃法",
                images:require("../../asset/images/FirstPageAlipay_4.png"),
            },
        ]
    },
];
class FirstPageContent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {


        return (
            <div className={"FirstPageCentent"}>
                {
                    contentAll.map((value,key)=>{
                            return (

                                <div key={key} className={"FirstPageCentent_main"}>
                                    <h3 className={"FirstPageCentent_main_title"}>{value.title}</h3>
                                   <ul className={"FirstPageContent_ul"}>
                                       {
                                           value.contentAll.map((v,k)=>{
                                               return (
                                                   <li key={k}>
                                                       <div className={"FirstPageCentent_left"}>
                                                           <div className={"FirstPageCentent_left_1"}>{v.content_1}</div>
                                                           <div  className={"FirstPageCentent_left_2"}>{v.content_2}</div>
                                                       </div>
                                                       <div className={"FirstPageCentent_right"}>
                                                           <img src={`${v.images}`} />
                                                       </div>
                                                   </li>
                                               )
                                           })
                                       }
                                   </ul>
                                </div>
                            )
                    })
                }
            </div>
        )
    }

}

export default FirstPageContent; //只能有有一个

