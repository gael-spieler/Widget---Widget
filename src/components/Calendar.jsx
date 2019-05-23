import React, {Component} from 'react';
import '../index.scss'
import SwitchDate from './SwitchDate';
import Slots from './Slots';
import Bookings from './Bookings';

class Calendar extends Component {
    state = {
        availableSlots: []
    }

    componentWillMount() {
        console.log('props', this.props)
    }

    buildSlots = () => {
        console.log(this.props)  
        
        let opening = new Date(2019, 0, 1, 9, 0)
        let closing = new Date(2019, 0, 1, 17, 0)
        
        const allowed = {
            start: opening.getHours(),
            end: closing.getHours()
        }
    
        console.log({allowed})
    
        let time = allowed.start - this.props.serviceDuration
        console.log({time})
    
    
        while (time < allowed.end - this.props.serviceDuration) {
            time += this.props.serviceDuration
            this.state.availableSlots.push(time)
        }
        console.log(this.state.availableSlots) 
        }

    

        render() {
            return (
                <div>
                    <div id="calendar">
                        <SwitchDate bookings={this.props.bookings} filterByDate={this.props.filterByDate} date={this.props.date} updateDate={this.props.updateDate}></SwitchDate>
                        <div className="slot-container">
                            <Slots availableSlots={this.state.availableSlots} buildSlots={this.buildSlots} updateTime={this.props.updateTime}></Slots>
                            <Bookings bookings={this.props.bookings}></Bookings>
                        </div>
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

// nextDay = (date) => {
//     let nextDay = moment(date).add(1, 'days')
//     console.log(nextDay)
//     // this.setState({today:nextDay._i})
//     // console.log('setnext', this.state.today)
// }

// previousDay = (date) => {
//     let previousDay = moment(date).subtract(1, 'days')
//     console.log({previousDay})
// } 


