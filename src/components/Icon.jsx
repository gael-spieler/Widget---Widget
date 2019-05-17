import React, {Component} from 'react';
import '../index.scss';
import icon from '../img/widget_icon.png';
import bg from '../img/bg.png';

class Icon extends Component {
    render() {
        var bgStyle = {
            backgroundImage: `url(${bg})`
          }
        return (
            <div>
                <div className="wrapper wrapper-bg" style={bgStyle}>
                    <div className="icon">
                        <a title="Save time and book easily with Platboo!" onClick={() => this.props.showWidget()}>
                            <img src={icon} alt="Widget Icon"/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Icon;