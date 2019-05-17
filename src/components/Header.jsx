import React, {Component} from 'react';
import logo from '../img/logo.png';


class Header extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <div className="header_brand">
                        <img src={logo} alt="Widget Logo" />
                        <p className="header_title">Widget</p>
                    </div>
                    <a className="close" onClick={() => this.props.hideWidget()}>X</a>
                </div>
            </div>
        );
    }
}

export default Header;