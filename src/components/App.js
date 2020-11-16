import React, { Component } from 'react';

class App extends Component {
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
