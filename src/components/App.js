import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { title: this.props.title };
    }

    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
            </div>
        );
    }
}

export default App;
