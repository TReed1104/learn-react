import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { title: this.props.title };
    }

    render() {
        return (
            <div> { this.state.title } </div>
        );
    }
}

export default App;
