import React, { Component } from 'react'

interface Props {
}
interface State {
}

export default class ErrorPage extends Component<Props, State> {
    state = {}

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Oops! Page not found.</h1>
            </>
        )
    }
}
