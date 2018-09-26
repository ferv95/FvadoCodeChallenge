import * as React from 'react';
import { phoneModel } from '../../models/phoneModel';

interface IProps {
    phone: phoneModel;
    backHandler: () => void;
}

export class PhoneDetail extends React.Component<IProps, {}>{

    public render() {
        return (
            <div className="container phonedetailcontainer">
                <div className="row">
                    <div className="col-sm-4 leftdiv">
                        <div className="row phonepic">
                            <img src={this.props.phone.ImgURL} />
                        </div>
                        <div className="row price">
                            <p>{this.props.phone.Price}$</p>
                        </div>
                    </div>
                    <div className="col-sm-8 rightdiv">
                        <div className="row phonebrand">
                            <p>
                                {this.props.phone.Brand}
                            </p>
                        </div>
                        <div className="row phonedetails">
                            <p>Model: {this.props.phone.Model}</p>
                            <p>Color: {this.props.phone.Color}</p>
                        </div>
                        <div className="row phonedescription">
                            <p>{this.props.phone.Description}</p>
                        </div>
                        <div className="row btndiv">
                            <button className="btn btn-primary btnBack" onClick={() => this.props.backHandler()}>BACK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}