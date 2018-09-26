import * as React from "react";

interface IProps {
    isFetching: boolean;
}

export class Spinner extends React.Component<IProps, {}>{

    constructor(props: any) {
        super(props);
    }

    public render() {
        if (this.props.isFetching) {
            return (
                <div className="spinner">
                    <img src="https://loading.io/spinners/money/index.coin-flowing-loader.svg"/>
                </div>
                );
        } else {
            return null;
        }
    }

}