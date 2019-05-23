import React, {Component} from 'react';
import '../index.scss'
import moment from 'moment';

class SwitchDate extends Component {

    state = {
        date: moment().format('YYYY-MM-DD')
    }

   updateDate = (e) => {
       let newDate = e.target.value
       console.log({newDate})
       this.props.filterByDate(newDate)
   }

    render() {
        return (
            <div>
                <div id="nav">
                    <input id="date" defaultValue={this.state.date} type="date" onChange={(e) => this.updateDate(e)}/>
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