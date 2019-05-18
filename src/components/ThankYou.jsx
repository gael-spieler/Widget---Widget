import React, {Component} from 'react';
import '../index.scss'

class ThankYou extends Component {

    render() {
        var svgStyle = {
            stroke: '#fbba42',
            strokeWidth: 2
        }
        return (
            <div>
                <div className="container">
                    <p className="container_claim">
                    Thank you Pedro! <br />
                    Your Booking has been successful. <br />
                    We've sent you a reminder email.
                    </p>
                    <svg height="3" width="100">
                        <line x1="0" y1="0" x2="100" y2="0" style={svgStyle} />
                    </svg>

                    <p className="container_claim">
                    Enjoy your fitness class, <br />
                    see you soon!
                    </p>
                    <div className="back" href="/">
                        <a onClick={()=> this.props.back()} title="Go back to date and time availability">&#10094; Make another booking</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ThankYou;