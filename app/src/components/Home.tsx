import React, { Component } from 'react'

interface Props {
}
interface State {
}

export default class Home extends Component<Props, State> {
    state = {}

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Home Page</h1>
            </>
        )
    }
}
