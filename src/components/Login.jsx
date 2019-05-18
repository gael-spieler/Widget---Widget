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
                        </form>
                        <div class="next big">
                            <a onClick={()=> this.props.next(this.props.step)}>Login</a>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Login;