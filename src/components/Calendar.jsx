import React, {Component} from 'react';
import '../index.scss'
import moment from 'moment';
import SwitchDate from './SwitchDate';
import Slots from './Slots';
// import Bookings from './Bookings';

class Calendar extends Component {
    state = {
        booked: [],
        today: moment().format('DD MMM YYYY'), 
        availableSlots: [], 
        notAvailable: []
    }

    // componentWillMount() {
    //  this.filterByDate(this.state.date) 
    // }

    nextDay = (date) => {
        let nextDay = moment(date).add(1, 'days')
        console.log(nextDay)
        // this.setState({today:nextDay._i})
        // console.log('setnext', this.state.today)
    }

    previousDay = (date) => {
        let previousDay = moment(date).subtract(1, 'days')
        console.log({previousDay})
    } 

    buildSlots = () => {
        console.log(this.props)     
        
        const allowed = {
            start: 9,
            end: 17
        }
    
        console.log({allowed})
    
        let time = allowed.start - this.props.newBooking.duration
        console.log({time})
    
    
        while (time < allowed.end - this.props.newBooking.duration) {
            time += this.props.newBooking.duration
            this.state.availableSlots.push(time)
        }
        console.log(this.state.availableSlots) 
        }

    // renderBookings = () => {
    //     console.log('fml')
    

    //     console.log('waat')

    //     let notAvailable = this.state.booked.filter(b => b.start = moment(b.start).format('HH').toString().toNumber())
    //     console.log('notavailable', notAvailable)
    //     this.setState({notAvailable})
    // }

    

        render() {
            return (
                <div>
                    <div id="calendar">
                        <SwitchDate bookings={this.props.bookings} filterByDate={this.props.filterByDate} today={this.state.today} previousDay={this.previousDay} nextDay={this.nextDay} renderBookings={this.renderBookings}></SwitchDate>
                        <Slots availableSlots={this.state.availableSlots} buildSlots={this.buildSlots}></Slots>
                    </div>
                </div>
            );
        }
}

export default Calendar;

/* <Bookings booked={this.state.booked} renderBookings={this.renderBookings} notAvailable={this.state.notAvailable}></Bookings> */



// {
//     this.props.bookings.map((b) => {
//         let bookingStyle = {
//             top: (b.start- allowed.start)*41 + 'px'
//         }
//         return (
//             <div className="booking" style={bookingStyle}>Not Available</div>
//         )
//     })
// }


