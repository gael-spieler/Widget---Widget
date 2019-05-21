import React, {Component} from 'react';
import '../index.scss';


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
                    <form className="form" onSubmit={(e) => this.props.selectService(e)}>
                        <div className="form_radio">

                        {this.props.services.map((service, index) => {
                                return (
                                    <div className="input">
                                        <input required type="radio" value={service.name} name="services" id={service._id} key={index} onChange={(e) => this.props.updateService(e)}/>
                                        <label htmlFor={service}><span>{service.fullLength} min. - {service.name} - <strong>${service.price}</strong></span></label>
                                    </div>
                                    )
                                })}
                           
                        </div>
                        <input type="submit" value="Next" className="next next-first" />

                    </form>
                </div>
            </div>
        );
    }
}

export default SelectService;