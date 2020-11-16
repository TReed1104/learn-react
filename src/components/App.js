import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { title: this.props.title };
    }

    render() {
        return (
            <>
                <h1>{ this.state.title }</h1>
            </>
        );
    }
}

export default App;
