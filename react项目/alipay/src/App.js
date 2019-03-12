import React, { Component } from 'react';
import {BrowserRouter  as Router} from "react-router-dom"
import './App.css';
// import Footer from "./components/Footer.js";
import {Route} from "react-router-dom"
import routes from "./routers/routers";


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                {
                    routes.map((route,key)=>{
                        if (route.exact){
                            return(
                                <Route path={route.path} key={key} exact
                                       render={props => (
                                           <route.component {...props} routes={route.routes} />
                                       )}
                                />
                            )
                        }
                        return(
                            <Route path={route.path}  key={key}
                                   render={props => (
                                       <route.component {...props} routes={route.routes} />
                                   )}
                            />
                        )
                    })
                }
            </div>
        </Router>
    );
  }
}

export default App;
