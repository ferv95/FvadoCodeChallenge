import * as React from 'react';
import { phoneModel } from '../../models/phoneModel';

interface IProps {
    phone: phoneModel;
    phoneSelectedHandler: (phoneID: string) => void;
}

export class PhoneListItem extends React.Component<IProps, {}>{

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="col-sm-5 listphone" key={this.props.phone.ID} onClick={() => this.props.phoneSelectedHandler(this.props.phone.ID)}>
                <div id="leftdiv">
                    <div className="phonepic">
                        <img src={this.props.phone.ImgURL} />
                    </div>
                    <div className="price">
                        <p>{this.props.phone.Price}$</p>
                    </div>
                </div>
                <div className="rightdiv">
                    <h2>{this.props.phone.Brand}</h2>
                    <div className="phonelistdetails">
                        <p>Model: {this.props.phone.Model}</p>
                    </div>
                </div>
            </div>
        );
    }

}