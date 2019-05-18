import React, {Component} from 'react';
import '../index.scss'

class Review extends Component {
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
                                <li><small>1.5h - Fitness Training - $150</small></li>
                                <li><small>Tuesday, 17th May 2019</small></li>
                                <li><small>20:00pm - 21:30pm</small></li>
                            </ul>
                        </div>
                        <svg height="3" width="100">
                            <line x1="0" y1="0" x2="100" y2="0" style={svgStyle} />
                        </svg>
                        <div className="container_booking">
                            <span><strong>Your Details:</strong></span>
                            <ul>
                                <li><small>Name: Pedro Don Pedro</small></li>
                                <li><small>Card Number: ***234</small></li>
                                <li><small>Expiration: 04/22</small></li>
                            </ul>
                        </div>
                    
                    <div className="container_nav">
                            <div className="prev" onClick={() => this.props.prev(this.props.step)}>
                                <a>Edit</a>                    
                            </div>
                            <div className="next" onClick={() => this.props.next(this.props.step)}>
                                <a>Book</a>
                            </div>
                    </div>

                    </div>
            </div>
        );
    }
}

export default Review;