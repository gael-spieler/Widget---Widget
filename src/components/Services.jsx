import React, {Component} from 'react';
import '../index.scss';
import Header from './Header';
import SelectService from './SelectService';
import bg from '../img/bg.png';


class Services extends Component {
  
    render() {
        var bgStyle = {
            backgroundImage: `url(${bg})`
          }
        return (
            <div>
                <div className="wrapper-bg" style={bgStyle}>
                    <div className="layout">
                        <Header></Header>
                        <div className="wrapper">
                            <SelectService></SelectService>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;