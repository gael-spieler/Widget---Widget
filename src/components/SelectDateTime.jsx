import React, {Component} from 'react';
import '../index.scss';

class SelectDateTime extends Component {
    render() {
        return (
            <div>
                 <div className="container">
                        <p className="container_claim">
                            Select availability:
                        </p> 

                        <div className="calendar">

                                <div className="month"> 
                                    <ul className="month_header">
                                        <li>&#10094;</li>
                                        <li>May 2019</li>
                                        <li>&#10095;</li>
                                    </ul>
                                </div>
                                
                                <ul className="weekdays">
                                    <li>&#10094;</li>
                                    <li>M</li>
                                    <li>T</li>
                                    <li>W</li>
                                    <li>T</li>
                                    <li>F</li>
                                    <li>S</li>
                                    <li>S</li>
                                    <li>&#10095;</li>
                                </ul>
                                    
                                <ul className="days"> 
                                    <li>*</li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>
                                    <li>7</li>
                                    <li>*</li>
                                </ul>
                            </div>

                      
                        <div className="time">
                            <div className="time_slots">
                                <p>10:00 - 11:30</p>
                            </div>
                            <div className="time_slots">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="time_slots">
                                <p>15:00 - 16:30</p>
                            </div>
                            <div className="time_slots">
                                <p>19:00 - 20:30</p>
                            </div>
                            <div className="time_slots">
                                <p>20:30 - 22:00</p>
                            </div>
                        </div>

                        <div className="container_nav" >
                            <div className="prev" onClick={() => this.props.prev(this.props.step)} >
                                <a title="Go back and select a service">Prev</a>                    
                            </div>
                            <div className="next" onClick={() => this.props.next(this.props.step)}>
                                <a title="Proceed with signup and payment">Next</a>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default SelectDateTime;