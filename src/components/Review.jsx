import React, {Component} from 'react';
import '../index.scss'

class Review extends Component {

    state = {
        fullService: {}
    }

    componentWillMount() {
        console.log(this.props)
        
        // const fullService = this.props.services.find((service) =>{
        //     let id = this.props.booking.selServiceId
        //     let fromList = service._id
        //     return id === fromList
        // })
        // console.log({fullService})
        // this.setState({fullService})
    }
    render() {
        var svgStyle = {
            stroke: '#fbba42',
            strokeWidth: 2
        }
        return (
            <div>
                  <div className="container">
                        <div className="container_booking">
                            <span><strong>Your Booking:</strong></span>
                            <ul>
                                <li><small>{this.props.serviceDuration} h - {this.props.selService} - <strong>${this.props.servicePrice}</strong></small></li>
                                <li><small>On <strong>{this.props.newDate}</strong> at <strong>{this.props.newStart}h</strong></small></li>
                            </ul>
                        </div>
                        <svg height="3" width="100">
                            <line x1="0" y1="0" x2="100" y2="0" style={svgStyle} />
                        </svg>
                        <div className="container_booking">
                            <span><strong>Your Details:</strong></span>
                            <ul>
                                <li><small>Name: {this.props.name} {this.props.lastname}</small></li>
                                <li><small>Card Number: ***234</small></li>
                                <li><small>Expiration: 04/22</small></li>
                            </ul>
                        </div>
                    
                    <div className="container_nav">
                            <div className="prev" onClick={() => this.props.prev(this.props.step)}>
                                <a>Edit</a>                    
                            </div>
                            <div className="next" onClick={() => this.props.book()}>
                                <a>Book</a>
                            </div>
                    </div>

                    </div>
            </div>
        );
    }
}

export default Review;

/* <li><small>Tuesday, 17th May 2019</small></li>
<li><small>20:00pm - 21:30pm</small></li> */