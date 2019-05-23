import React, {Component} from 'react';
import '../index.scss'

class Login extends Component {
    render() {
        return (
                <div className="modal">
                    <div className="modal-login">
                        <a onClick={()=> this.props.hideLogin()} className="close close-login">X</a>
                        <form class="form">
                            <div class="form_display">
                                <label for="email">Email</label>
                                <input type="email" required />

                                <label for="Password">Password</label>
                                <input type="password" required />
                            </div>
                        <input class="next big" onClick={()=> this.props.next(this.props.step)} value="Login" />
                    
                        </form> 
                    </div>
                </div>
        );
    }
}

export default Login;