import React, {Component} from 'react';
import '../index.scss'

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
