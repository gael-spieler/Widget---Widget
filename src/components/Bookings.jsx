import React, {Component} from 'react';
import '../index.scss'

class Bookings extends Component {

    state = {
        notAvailableStyle: {}
    }

    render() {
        return (
            <div>
                {
                    this.props.bookings.map((booking) => {

                    let opening = new Date(2019, 0, 1, 9, 0)
                    let closing = new Date(2019, 0, 1, 17, 0)
                    
                    const allowed = {
                        start: parseInt(opening.getHours().toString(), 10),
                        end: parseInt(closing.getHours().toString(), 10)
                    }  
                    
                    let startNumber = booking.start.toString()
                    
                    let bookingStyle = {
                    top: (startNumber - allowed.start)*32 + 'px'
                    }
                    console.log(startNumber, bookingStyle)
                    return (
                    <div className="booking" style={bookingStyle} name={booking.name}>Not Available</div>
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