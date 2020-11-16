import React, { Component } from 'react';
import PropTypes from 'prop-types'

class App extends Component {
    static propTypes = {
        title: PropTypes.string
    }
    constructor(props) {
        // Call the Component constructor to assign our props
        super(props);

        // Procedurally convert all props to local states
        this.state = {}
        for (let key of Object.keys(this.props)) {
            this.state[key] = this.props[key];
        }
    }
    render() {
        return (
            <>
                <h1>{this.state.title}</h1>
            </>
        );
    }
}

export default App;
