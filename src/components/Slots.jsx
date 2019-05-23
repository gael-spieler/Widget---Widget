import React, {Component} from 'react';
import '../index.scss';
import moment from 'moment'

class Slots extends Component {

    componentWillMount() {
        this.props.buildSlots()
    }

    render() {
        return (
            <div onClick={(e) => this.props.updateTime(e)}>
                    {this.props.availableSlots.map(slot => {
                    return (
                    <div className="slot" id={slot}>{slot}</div>
                    )
                    })}
            </div>
        );
    }
}

export default Slots;