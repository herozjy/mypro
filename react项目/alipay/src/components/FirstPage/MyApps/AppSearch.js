import React, {Component} from 'react';
import BackArrow  from "../../BackArrow";
import  "../../../asset/css/MyAppsIndex/AppSearch.css";
import  {Input,Icon} from  "antd"
class AppSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className={"AppSearch"}>
              <div className={"AppSearch_arrow"}>
                  <BackArrow topath={"/"} />
              </div>
                <span className={"AppSearch_search"}>
                    <Input
                        placeholder="全部应用"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                </span>
            </div>
        )
    }

}

export default AppSearch; //只能有有一个

