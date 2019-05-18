import React, {Component} from 'react';
import Login from './Login';
import '../index.scss'

class FillData extends Component {
    state = {
        loginHidden: true,
    }
    
    showLogin = () => {
        const loginHidden = false;
        this.setState({loginHidden});
    }

    hideLogin = () => {
    const loginHidden = true;
    this.setState({loginHidden});
    }

    render() {
        return (
<div>
    <div className="container">

        <p className="container_claim">
        Provide your payment info:
        </p> 
        <form className="form">
            <div className="form_display">
                <div className="form_inline">
                    <div className="form_display">
                        <label for="name">First Name</label>
                        <input type="text" required />
                    </div>
                    <div className="form_display">
                        <label for="name">Last Name</label>
                        <input type="text" required />
                    </div>
                </div>

                <label for="email">Email</label>
                <input type="email" required pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" title=" Must be a valid email" />

                <label for="Password">Create Password</label>
                <input type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />

                <label for="card_number">Card Number</label>
                <input type="number" required />

                <div className="form_inline">
                    <div className="form_display">
                        <label for="expiration">Expiration</label>
                        <input type="date" required />
                    </div>
                    <div className="form_display">
                        <label for="cvc">CVC</label>
                        <input type="number" required pattern="^[0-9]{3}$" />
                    </div>
                </div>
            </div>
        </form>
        <div className="next big" onClick={()=> this.props.next(this.props.step)}>
            <a title="Signup, confirm your booking and proceed to payment">Signup and Pay</a>
        </div>

        <p className="login" >
        I already have an account. <a onClick={()=> this.showLogin()} title="Log In to finalize your booking"> Login</a>      
        </p> 
        <div className="back" onClick={()=> this.props.prev(this.props.step)}>
                        <a title="Go back to date and time availability">&#10094; Go Back</a>
        </div>
    </div>
    {this.state.loginHidden === false && <Login hideLogin={this.hideLogin} loginHidden={this.state.loginHidden} next={this.props.next} step={this.props.step}/>}
</div>
        );
    }
}

export default FillData;