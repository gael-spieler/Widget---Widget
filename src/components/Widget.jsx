import React, {Component} from 'react';
import '../index.scss';
import Header from './Header';
import SelectService from './SelectService';
import SelectDateTime from './SelectDateTime';
import FillData from './FillData';
import bg from '../img/bg.png';


class Widget extends Component {

    state = {
        step: 0
    }

    next = (currentStep) => {
        const step = currentStep + 1;
        this.setState({step});
    }
    prev = (currentStep) => {
        const step = currentStep - 1;
        this.setState({step});
    }

    render() {
        var bgStyle = {
            backgroundImage: `url(${bg})`
        }
        return (
            <div>
                <div className="wrapper-bg" style={bgStyle}>
                    <div className="layout">
                        <Header showWiget={this.props.showWidget} hideWidget={this.props.hideWidget}></Header>
                        <div className="wrapper">
                        {this.state.step === 0 && <SelectService step={0} next={this.next} />}
                        {this.state.step === 1 && <SelectDateTime step={1}  next={this.next} prev={this.prev} />}
                        {this.state.step === 2 && <FillData step={2}  next={this.next} prev={this.prev} />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Widget;