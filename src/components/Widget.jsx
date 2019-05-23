import React, {Component} from 'react';
import '../index.scss';
import Header from './Header';
import SelectService from './SelectService';
import SelectDateTime from './SelectDateTime';
import FillData from './FillData';
import Review from './Review';
import ThankYou from './ThankYou';
import axios from 'axios';
import moment from 'moment';




class Widget extends Component {

    state = {
        step: 0,
        newBooking: {},
        services: [],
        first_name: '', 
        last_name: '',
        email: '', 
        password: '', 
        errorMessage: '',
        bookings: [],
        date: moment().format('YYYY-MM-DD'),
        selServiceId: '',
        selService: '',
        serviceDuration: 1,
        newDate: '',
        newStart: '',
        newEnd: ''
    }



    componentWillMount() {
        console.log('id', this.props.id);
        axios.get(process.env.REACT_APP_GET_SERVICES + this.props.id )
        .then(response => {
            // console.log('response', response.data);
            let services = response.data
            services.map(service => service.fullLength = 60 )
            console.log({services})
            this.setState({services})
        })
        .catch(error => {
            console.log('error', error);
        });
        this.filterByDate(this.state.date)
    }
    // get Bookings
    filterByDate = (date) => {
        axios.get(process.env.REACT_APP_GET_BOOKINGS + this.props.id + '/?date=' + date)
        .then(response => {
            console.log('response', response.data);
            let bookings = response.data
            bookings.map(booking => booking.start = moment(booking.start).format('HH'))
            bookings.map(booking => booking.end = moment(booking.end).format('HH'))
            this.setState({bookings})
            console.log('state bookings', this.state.bookings)
        })
        .catch(error => {
            console.log('error', error);
        });
    }

    // service
    selectService = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.next(this.state.step)
    }
    updateService = (e) => {
        console.log(e.target.value, e.target.id, e.target.key);
        let selServiceId = e.target.id
        let selService = e.target.value
        

        this.setState({selServiceId})
        this.setState({selService})
        console.log(this.state)
    }

    // get date and time of booking
    updateDate = (e) => {
        let newDate = e.target.value
        this.filterByDate(newDate)
        this.setState({newDate})
        console.log(this.state.newDate)
    }

    updateTime = (e) => {
        console.log('target', e.target.id)
        let newStart = e.target.id
        let newEnd = e.target.id + this.state.duration
        this.setState({newStart})
        this.setState({newEnd})
    }

    // signup
    updateDetails= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    signup = (e) => {
        e.preventDefault();
        
        let user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        axios.post(process.env.REACT_APP_CREATE_USER, user)
        .then(response => {
            console.log('user', user);
            console.log('response', response.data);
            alert('Record created');
            this.next(this.state.step);
        })
        .catch(error => {
            console.log('error', error);
        });
        
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
                        {this.state.step === 0 && <SelectService step={0} next={this.next} id={this.props.id} services={this.state.services} updateService={this.updateService} selectService={this.selectService}/>}
                        {this.state.step === 1 && <SelectDateTime step={1}  next={this.next} prev={this.prev} serviceDuration={this.state.serviceDuration} bookings={this.state.bookings} services={this.state.services} filterByDate={this.filterByDate} date={this.state.date} updateDate={this.updateDate} updateTime={this.updateTime}/>}
                        {this.state.step === 2 && <FillData step={2}  next={this.next} prev={this.prev} signup={this.signup} updateDetails={this.updateDetails}/>}
                        {this.state.step === 3 && <Review step={3}  next={this.next} prev={this.prev} serviceDuration={this.state.serviceDuration} services={this.state.services}/>}
                        {this.state.step === 4 && <ThankYou step={4} back={this.back} />}
                        </div>
                    </div>

            </div>
        );
    }
}

export default Widget;