import React, {Component} from 'react';
import  "../../../asset/css/MyAppsIndex/AllApps.css";
import {Icon} from "antd";
import axios from "axios"

class AllApps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appData:[],
            isEdit:false,
        }

    }
    componentDidMount(){
        axios.get("http://localhost/myAlipay/appData.php")
            .then((respose)=>{
                this.setState({
                    appData:respose.data,
                })
            })
            .catch((err)=>{
                console.log(err)
            })

    }
    handlerClickEidt =()=>{

        this.setState({
            isEdit:!this.state.isEdit
        })
    };
    handlerClickCheck =(id,isCheck)=>{
        var isCheck = !Number(isCheck);
        console.log(id,isCheck);
        axios.get("http://localhost/myAlipay/appData.php?id="+id + "&isCheck="+isCheck)
            .then((respose)=>{
                console.log(respose);
                this.setState({
                    appData:respose.data,
                })
            })
            .catch((err)=>{
                console.log(err)
            })


    };


    render() {
        var count=0;
        return (
          <div>
              <div className={"myuseapp"}>
                    <span className={"myuseapp_left"} >我的应用</span>
                     <span className={"myuseapp_middle"}>
                          {
                              this.state.appData.map((value,key)=>{

                                  if (Number(value.isCheck)){
                                 count++;

                                      return(
                                          <span key={key} className={"myuseapp_part"}>
                                          <div>
                                              {
                                                  count<=6 ? <Icon type={value.type}/>:
                                                ""
                                              }
                                          </div>
                                      </span>
                                      )
                                  }
                              })


                          }
                         {count>6?<Icon type="ellipsis" />:""}
                     </span>

                      <span className={"myuseapp_right"} onClick={this.handlerClickEidt}>
                          {this.state.isEdit?
                              <div style={{
                                border:"1px solid red",
                                  color:"red",
                              }}>取消</div>
                              :<div>编辑</div>
                          }


                      </span>
              </div>



              <div className={"appData"}>
                  <dl>
                      <dt>便民服务</dt>
                      <dd>
                          <ul>
                              {
                                  this.state.appData.map((value,key)=>{
                                      if (value.title==="便民服务"){
                                          return(
                                              <li key={key} className={"appData_part"}>

                                                  <div>
                                                      <Icon type={value.type}/>
                                                      <div>{value.name}</div>
                                                  </div>
                                                  <div className={"minus_plus"}
                                                    style={
                                                        {
                                                            display: this.state.isEdit?
                                                                "block"
                                                                :"none"
                                                        }
                                                    }
                                                  >
                                                      {
                                                          Number(value.isCheck)?
                                                              <span className={"m"} onClick={this.handlerClickCheck.bind(this,value.id,value.isCheck)}>-</span>: <span className={'p'} onClick={this.handlerClickCheck.bind(this,value.id,value.isCheck)}>+</span>
                                                      }
                                                  </div>
                                              </li>
                                          )
                                      }
                                  })
                              }
                          </ul>
                      </dd>
                      <dt>财富管理</dt>
                      <dd>
                          <ul>
                              {
                                  this.state.appData.map((value,key)=>{
                                      if (value.title==="财富管理"){
                                          return(
                                              <li key={key} className={"appData_part"}>

                                                  <div>
                                                      <Icon type={value.type}/>
                                                      <div>{value.name}</div>
                                                      <div className={"minus_plus"}
                                                           style={
                                                               {
                                                                   display: this.state.isEdit?
                                                                       "block"
                                                                       :"none"
                                                               }
                                                           }
                                                      >
                                                          {
                                                              Number(value.isCheck)?
                                                                  <span className={"m"} onClick={this.handlerClickCheck.bind(this,value.id,value.isCheck)}>-</span>: <span className={'p'} onClick={this.handlerClickCheck.bind(this,value.id,value.isCheck)}>+</span>
                                                          }
                                                      </div>
                                                  </div>
                                              </li>
                                          )
                                      }
                                  })
                              }
                          </ul>
                      </dd>
                      <dt>资金往来</dt>
                      <dd>
                          <ul>
                              {
                                  this.state.appData.map((value,key)=>{
                                      if (value.title==="资金往来"){
                                          return(
                                              <li key={key} className={"appData_part"}>

                                                  <div>
                                                      <Icon type={value.type}/>
                                                      <div>{value.name}</div>
                                                      <div className={"minus_plus"}
                                                           style={
                                                               {
                                                                   display: this.state.isEdit?
                                                                       "block"
                                                                       :"none"
                                                               }
                                                           }
                                                      >
                                                          {
                                                              Number(value.isCheck)?
                                                                  <span className={"m"} onClick={this.handlerClickCheck.bind(this,value.id,value.isCheck)}>-</span>: <span className={'p'} onClick={this.handlerClickCheck.bind(this,value.id,value.isCheck)}>+</span>
                                                          }
                                                      </div>
                                                  </div>
                                              </li>
                                          )
                                      }
                                  })
                              }
                          </ul>
                      </dd>
                      <dt>购物娱乐</dt>
                      <dd>
                          <ul>
                              {
                                  this.state.appData.map((value,key)=>{
                                      if (value.title==="购物娱乐"){
                                          return(
                                              <li key={key} className={"appData_part"}>

                                                  <div>
                                                      <Icon type={value.type}/>
                                                      <div>{value.name}</div>
                                                      <div className={"minus_plus"}
                                                           style={
                                                               {
                                                                   display: this.state.isEdit?
                                                                       "block"
                                                                       :"none"
                                                               }
                                                           }
                                                      >
                                                          {
                                                              Number(value.isCheck)?
                                                                  <span className={"m"} onClick={this.handlerClickCheck.bind(this,value.id,value.isCheck)}>-</span>: <span className={'p'} onClick={this.handlerClickCheck.bind(this,value.id,value.isCheck)}>+</span>
                                                          }
                                                      </div>
                                                  </div>
                                              </li>
                                          )
                                      }
                                  })
                              }
                          </ul>
                      </dd>

                  </dl>
              </div>
          </div>
        )
    }

}

export default AllApps; //只能有有一个

