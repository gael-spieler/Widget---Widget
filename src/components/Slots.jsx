import React, {Component} from 'react';
import '../index.scss';

class Slots extends Component {
    state = {
        myBookingStyle: {},
        visible: false
    }

    componentWillMount() {
        this.props.buildSlots()
    }

    showMyBooking = (e) => {
        console.log('target', e.target.id)

        let newStart = e.target.id

        let opening = new Date(2019, 0, 1, 9, 0)
        let closing = new Date(2019, 0, 1, 17, 0)

        const allowed = {
        start: opening.getHours(),
        end: closing.getHours()
        } 

        let myBookingStyle = {
        top: (newStart - allowed.start)*32 + 'px'
        }
        console.log('style', this.state.myBookingStyle)
        this.setState({myBookingStyle}, function () {
            this.setState({visible:true})
        })

    }
    

    render() {
        return (
            <div onChange={(e) => this.props.updateTime(e)}  onClick={(e) => this.showMyBooking(e)}>
                    {this.props.availableSlots.map(slot => {
                    return (
                    <div className="slot" id={slot}>{slot}</div>
                    )
                    })}
                    {this.state.visible === true &&  <div className="my-booking" style={this.state.myBookingStyle}>{this.props.selService}</div>}

            </div>
        );
    }
}

export default Slots;