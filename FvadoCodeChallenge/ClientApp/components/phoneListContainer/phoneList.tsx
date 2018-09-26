import * as React from 'react';
import { phoneModel } from "../../models/phoneModel";
import { PhoneDetail } from '../phoneDetail/phoneDetail';
import { PhoneListItem } from '../phoneListItem/phoneListItem';

interface IProps {
    phones: phoneModel[];
    getPhones: () => Promise<phoneModel[]>
}

interface IState {
    selectedPhone: string;
    currentScreen: string;
}

export class PhoneList extends React.Component<IProps, IState>{

    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        this.props.getPhones();
        this.setState({
            selectedPhone: '',
            currentScreen: 'list',
        })
    }

    renderComponent = () => {
        if (this.state.currentScreen === 'list') {
            return (
                <div className="container phonelistcontainer">
                    {
                        this.props.phones.map((phone) => {
                            return <PhoneListItem phone={phone} phoneSelectedHandler={this.phoneSelected} key={phone.ID}/>
                        })
                    }
                </div>
            );
        } else {
            return (
                <PhoneDetail phone={this.getPhoneByID(this.state.selectedPhone)} backHandler={this.backButtonHandler} />
            );
        }
    }

    phoneSelected = (phoneID: string) => {
        this.setState({
            currentScreen: 'detail',
            selectedPhone: phoneID,
        })
    }

    getPhoneByID = (phoneID: string): phoneModel => {
        return this.props.phones.filter(x => x.ID === phoneID)[0];
    }

    backButtonHandler = () => {
        this.setState({
            currentScreen: 'list',
        });
    }

    public render() {

        if (this.props.phones.length > 0) {
            return this.renderComponent()
        } else {
            return null
        }
    }

}