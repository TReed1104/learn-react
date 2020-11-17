import React, { Component } from 'react'

interface Props {
}
interface State {
}

export default class Template extends Component<Props, State> {
    state = {}

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>TypeScript Template Component</h1>
            </>
        )
    }
}
