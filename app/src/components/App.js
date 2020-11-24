import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

// Example imports
//import Template from './Template.js';
//import Template from "./Template.tsx";

// Example imports of components with the same name but different compile types
//import { default as JsTemplate } from './Template.js';
//import { default as TsTemplate } from "./Template.tsx";

// Router route components
import Home from './Home.tsx';
import ErrorPage from './ErrorPage.tsx';

class App extends Component {
    static propTypes = {
        title: PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    render() {
        // Procedurally generate our links and setup the Router
        let linkElements = [];
        let routeElements = [];
        const routes = [
            { id: "home", to: "/", text: "Home", component: Home, exact: true },
        ];
        for (let route of routes) {
            // Create our links
            linkElements.push(<Link key={route.id} to={route.to}>{route.text}</Link>);
            // Generate the Route elements for the <Switch>
            if (route.exact) {
                routeElements.push(<Route key={route.id} path={route?.to} component={route.component} exact/>);
            }
            else {
                routeElements.push(<Route key={route.id} path={route.to} component={route.component}/>);
            }
        }

        // Return the template to render
        return (
            <>
                <h1>{this.props.title}</h1>
            </>
        );
    }
}

export default App;
