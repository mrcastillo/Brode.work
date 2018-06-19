import React, { Component } from 'react';
import './css/index.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Switch>
        <div className={"app-layout"}>
          <div className={"construction"}>
            <h1>Currently under construction</h1>
          </div>

          <NavBar />
          
          <Route exact path="/" component={Home} />
          <Route path={"/projects"} component={Projects}/>
          <Route path={"/blog"} component={Blog}/>

          <Footer />
        </div>
      </Switch>
    );
  }
}

export default App;
