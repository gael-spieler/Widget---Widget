import React, {Component} from 'react';
import '../index.scss'

class SelectService extends Component {

    render() {
        var svgStyle = {
            stroke: '#fbba42',
            strokeWidth: 2
        }
        return (
            <div>
                <div className="container">
                    <p className="container_claim">
                    <strong>Make your online booking quick and easy</strong>
                    </p>
                    <svg height="3" width="100">
                    <line x1="0" y1="0" x2="100" y2="0" style={svgStyle} />
                    </svg>

                    <p className="container_claim">
                    Select your service:
                    </p> 

                    <form className="form">
                        <div className="form_radio" name="services">
                            <div className="input">
                                <input type="radio" value="1h"/><span>1h - Fitness Training - $100</span>
                            </div>
                            <div className="input">
                                <input type="radio" value="1.5h"/><span>1.5h - Fitness Training - $150</span>
                            </div>
                            <div className="input">
                                <input type="radio" value="2h"/><span>2h - Intensive Training - $200</span>
                            </div>
                            <div className="input">
                            <input type="radio" value="1h"/><span>1h - Intensive Training - $150</span>
                            </div>
                            <div className="input">
                            <input type="radio" value="1.5h"/><span>1.5h - Customize Training - $150</span>
                            </div>
                        </div>
                    </form>
                    <div onClick={() => this.props.next(this.props.step)} className="next next-first">
                        <a title="Check date and time availability">Next</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectService;