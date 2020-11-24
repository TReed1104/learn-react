import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

// Example imports
//import Template from './Template.js';
//import Template from "./Template.tsx";

// Example imports of components with the same name but different compile types
//import { default as JsTemplate } from './Template.js';
//import { default as TsTemplate } from "./Template.tsx";

class App extends Component {
    static propTypes = {
        title: PropTypes.string
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
            </>
        );
    }
}

export default App;
