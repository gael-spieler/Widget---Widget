import React, {Component} from 'react';
import '../index.scss';
import Header from './Header';
import SelectService from './SelectService';
import SelectDateTime from './SelectDateTime';
import FillData from './FillData';
import Review from './Review';
import ThankYou from './ThankYou';
import axios from 'axios';




class Widget extends Component {

    state = {
        step: 0,
        booking: {},
        services: []
    }



    componentWillMount() {
        console.log('id', this.props.id);
        axios.get(process.env.REACT_APP_GET_SERVICES + this.props.id)
        .then(response => {
            console.log('response', response.data);
            let services = response.data
            services.map(service => service.fullLength = (service.duration + service.preparation_time))
            console.log({services})
            this.setState({services})
        })
        .catch(error => {
            console.log('error', error);
        });
    }

    updateService = (e) => {
        console.log(e.target.value, e.target.id, e.target.key);
        let booking = {selServiceId: e.target.id, 
                        selService: e.target.value}
        this.setState({booking})
        console.log(this.state)
    }

    selectService = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.next(this.state.step)
    }

    next = (currentStep) => {
        const step = currentStep + 1;
        this.setState({step});
    }
    prev = (currentStep) => {
        const step = currentStep - 1;
        this.setState({step});
    }

    back = () => {
        const step = 0
        this.setState({step})
    }


    render() {
        return (
            <div>

                    <div className="layout">
                        <Header showWiget={this.props.showWidget} hideWidget={this.props.hideWidget}></Header>
                        <div className="wrapper">
                        {this.state.step === 0 && <SelectService step={0} next={this.next} id={this.props.id} booking={this.state.booking} services={this.state.services} updateService={this.updateService} selectService={this.selectService}/>}
                        {this.state.step === 1 && <SelectDateTime step={1}  next={this.next} prev={this.prev} />}
                        {this.state.step === 2 && <FillData step={2}  next={this.next} prev={this.prev} />}
                        {this.state.step === 3 && <Review step={3}  next={this.next} prev={this.prev} />}
                        {this.state.step === 4 && <ThankYou step={4} back={this.back} />}
                        </div>
                    </div>

            </div>
        );
    }
}

export default Widget;