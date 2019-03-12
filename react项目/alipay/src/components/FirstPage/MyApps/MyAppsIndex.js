import React, {Component} from 'react';
import AppSearch  from "./AppSearch";
import AllApps  from "./AllApps"
import "../../../asset/css/MyAppsIndex/MyAppsIndex.css"
class MyAppsIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <AppSearch/>
                <AllApps/>
            </div>
        )
    }

}

export default MyAppsIndex; //只能有有一个
