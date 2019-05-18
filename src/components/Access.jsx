import React, {Component} from 'react';
import '../index.scss'

class Access extends Component {

    buildContent = () => {
        return (
            <div>
                <form class="form">
                    <div class="form_display">
                        <label for="email">Email</label>
                        <input type="email" required />

                        <label for="Password">Password</label>
                        <input type="password" required />
                    </div>
                </form>
                <div class="next big">
                    <a href="booking.html">Login</a>
                </div>
                <p class="forgot">
                Forgot your password?  <a href="#">Click Here.</a>      
                </p> 
            </div>
        )      
    }
    render() {
        return (
            <div>
                {this.buildContent(this.props.command)}
            </div>
        );
    }
}

export default Access;