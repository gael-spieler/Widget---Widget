import React, {Component} from 'react';
import '../index.scss'

class Bookings extends Component {

    componentWillMount() {
        this.props.renderBookings()
    }
    render() {
        return (
            <div>
                {
                    this.props.booked.map((b) => {
                    const allowed = {
                        start: 9,
                        end: 17
                    }
                    let bookingStyle = {
                    top: (this.props.notAvailable - allowed.start)*31 + 'px'
                    }
                    return (
                    <div className="booking" style={bookingStyle} name={b.name}>Not Available</div>
                    )
                    })
                    }
            </div>
        );
    }
}

export default Bookings;

// bookings.forEach((b) => {
//     $('#calendar').append(`<div class="booking" style="top:${(b.start - allowed.start)*41}px">Full</div>`)
//   })

// {this.props.booked.map(b => {
//     return (
//     <div className="booking">Not Available</div>
//     )
//     })}