import React, {Component} from 'react';
import '../index.scss';
import moment from 'moment'

class Slots extends Component {

    componentWillMount() {
        this.props.buildSlots()
    }

    render() {
        return (
            <div>
                    {this.props.availableSlots.map(slot => {
                    return (
                    <div className="time" id={slot}>{slot}</div>
                    )
                    })}
            </div>
        );
    }
}

export default Slots;