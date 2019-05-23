import React, {Component} from 'react';
import '../index.scss'

class Bookings extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {
                    this.props.bookings.map((b) => {

                    let opening = new Date(2019, 0, 1, 9, 0)
                    let closing = new Date(2019, 0, 1, 17, 0)
                    
                    const allowed = {
                        start: opening.getHours(),
                        end: closing.getHours()
                    }  
                    
                    // b.start = b.start.getHours()
                    
                    let bookingStyle = {
                    top: (b.start - allowed.start)*32 + 'px'
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