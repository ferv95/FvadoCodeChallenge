import * as React from 'react';
import { SpinnerContainer } from "../spinner/spinnerContainer";

export class Layout extends React.Component<{}, {}>{
    public render() {
        return (
            <div className="container">
                <SpinnerContainer />
                {this.props.children}
            </div>
        )
    }
}