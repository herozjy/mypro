import React, {Component} from 'react';
import "../../asset/css/Shop/ShopTop.css";
import { Cascader,Input,Icon } from 'antd';

const options = [{
    value: '福建',
    label: '福建',
    children: [
        {
        value: '厦门',
        label: '厦门',
        children: [{
            value: '湖里',
            label: '湖里',
        }],
        },
        {
            value: '龙岩',
            label: '龙岩',
            children: [{
                value: '新罗',
                label: '新罗',
            }],
        }

    ],
}, {
    value: '上海',
    label: '上海',
    children: [{
        value: '上海市',
        label: '上海市',
        children: [{
            value: '浦东',
            label: '浦东',
        }],
    }],
}];



class ShopTop extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }
     onChange=(value)=> {
        console.log(value);
    }

   displayRender=(label)=> {
        return label[label.length - 1];
    }


    render() {
        return (
            <div className={"ShopTop"}>
               <div className={"address"}>
                   <Cascader
                       placeholder={"请选择"}
                       options={options}
                       defaultValue={['福建', '厦门', '湖里']}
                       expandTrigger="hover"
                       displayRender={this.displayRender}
                       onChange={this.onChange}
                   />
               </div>
                <div className={"ShopTop_search "}>
                    <Input
                        placeholder="阿里体育"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}

                        suffix={<Icon type="thunderbolt" theme="filled"  style={{ color: 'rgba(0,0,0,.25)' }} />}
                        // value={userName}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                    <Icon type="user-add" />
                    <Icon type="plus" />

                </div>
            </div>
        )
    }

}

export default ShopTop; //只能有有一个
