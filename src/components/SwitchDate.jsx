import React, {Component} from 'react';
import '../index.scss'
import moment from 'moment';

class SwitchDate extends Component {




    render() {
        return (
            <div>
                <div id="nav">
                    <input id="date" defaultValue={this.props.date} type="date" onChange={(e) => this.props.updateDate(e)}/>
                </div>
            </div>
        );
    }
}

export default SwitchDate;


/* <button id="prev" onClick={()=>this.props.previousDay(this.props.today)}>&#10094;</button>
                    <span id="date">{this.props.today.toString()}</span>
                    <button id="next" onClick={()=>this.props.nextDay(this.props.today)}>&#10095;</button>
                     */