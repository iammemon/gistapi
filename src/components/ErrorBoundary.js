import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }


    render() {
        if (this.state.hasError) {
            //fallback UI
            return (<center>
                <h1>Something went wrong,Try Refreshing the page.</h1>
            </center>);
        }

        return this.props.children;
    }
}


export default ErrorBoundary