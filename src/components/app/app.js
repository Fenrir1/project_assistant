import React, { Component } from "react";
import HomePage from "../pages/dashboard-page";
import EditModePage from "../pages/edit-mode-page";
import { Switch, Route, withRouter } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./app.css";

class App extends Component {
    state = {
        prevDepth: this.getPathDepth(this.props.location),
        isMobileMode: false
    };
    
    componentDidMount() {
        /* Max Mobile Width = 768px*/
        const isMobileMode = Boolean(window.innerWidth<=768);      
        this.setState(() => ({
            ...this.state,
            isMobileMode: isMobileMode,                
          }));       
    }

    static getDerivedStateFromProps(props, state){   
        let pathArr = props.location.pathname.split("/");
        pathArr = pathArr.filter(n => n !== "");          
        return {
          prevDepth: pathArr.length          
         };
   }

    getPathDepth(location) {
      let pathArr = location.pathname.split("/");
      pathArr = pathArr.filter(n => n !== "");
      return pathArr.length;
    }

  render() {
    const { location } = this.props;

    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter: 800, exit: 400 };

    return (
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
        <div
          className={
            this.getPathDepth(location) - this.state.prevDepth >= 0
              ? "left"
              : "right"
          }
        >
          <Switch location={location}>
            <Route path="/" exact component={HomePage} />
            <Route path="/editmode" exact component={ this.state.isMobileMode ? HomePage : EditModePage} />
          </Switch>
        </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);

