import React, {Component} from 'react';
import Login from './Login';
import axios from 'axios';
import '../index.scss'

class FillData extends Component {
    state = {
        loginHidden: true
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
        <form className="form" onSubmit={(e) => this.props.signup(e)}>
            <div className="form_display">
                <div className="form_inline">
                    <div className="form_display">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" value={this.state.first_name} onChange={(e) => this.props.updateDetails(e)} required />
                    </div>
                    <div className="form_display">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" required value={this.state.last_name} onChange={(e) => this.props.updateDetails(e)}/>
                    </div>
                </div>

                <label htmlFor="email">Email</label>
                <input type="email" name="email"  value={this.state.email} onChange={(e) => this.props.updateDetails(e)} required pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" title=" Must be a valid email" />

                <label htmlFor="Password">Create Password</label>
                <input type="password" name="password" value={this.state.password} onChange={(e) => this.props.updateDetails(e)} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />

                <label htmlFor="card_number">Card Number</label>
                <input type="number" />

                <div className="form_inline">
                    <div className="form_display">
                        <label htmlFor="expiration">Expiration</label>
                        <input type="date" />
                    </div>
                    <div className="form_display">
                        <label htmlFor="cvc">CVC</label>
                        <input type="number" pattern="^[0-9]{3}$" />
                    </div>
                    
                </div>
            </div>
            <input type="submit" value="Signup and Review" className="next big submit" />
            <p className="info"><small>You won't be charged yet.</small></p>
        </form>

      
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

/* <p className="login" >
I already have an account. <a onClick={()=> this.showLogin()} title="Log In to finalize your booking"> Login</a>      
</p>  */

{/* <div className="error">{this.props.error}</div>  */}
