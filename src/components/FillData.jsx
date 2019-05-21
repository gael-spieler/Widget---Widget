import React, {Component} from 'react';
import Login from './Login';
import axios from 'axios';
import '../index.scss'

class FillData extends Component {
    state = {
        loginHidden: true,
        first_name: '', 
        last_name: '',
        email: '', 
        password: '', 
        errorMessage: ''
    }
    
    showLogin = () => {
        const loginHidden = false;
        this.setState({loginHidden});
    }

    hideLogin = () => {
    const loginHidden = true;
    this.setState({loginHidden});
    }


    updateField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    signup = (e) => {
        e.preventDefault();
        
        let user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        axios.post(process.env.REACT_APP_CREATE_USER, user)
        .then(response => {
            console.log('user', user);
            console.log('response', response.data);
            alert('Record created');
            this.props.next(this.props.step);
        })
        .catch(error => {
            console.log('error', error);
        });
        
    }

    render() {
        return (
<div>
    <div className="container">

        <p className="container_claim">
        Provide your payment info:
        </p> 
        <form className="form" onSubmit={(e) => this.signup(e)}>
            <div className="form_display">
                <div className="form_inline">
                    <div className="form_display">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" name="first_name" value={this.state.first_name} onChange={(e) => this.updateField(e)} required />
                    </div>
                    <div className="form_display">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" name="last_name" required value={this.state.last_name} onChange={(e) => this.updateField(e)}/>
                    </div>
                </div>

                <label htmlFor="email">Email</label>
                <input type="email" name="email"  value={this.state.email} onChange={(e) => this.updateField(e)} required pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$" title=" Must be a valid email" />

                <label htmlFor="Password">Create Password</label>
                <input type="password" name="password" value={this.state.password} onChange={(e) => this.updateField(e)} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" />

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
            <input type="submit" value="Signup and Pay" className="next big submit" />
        </form>

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