import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Services from './components/Services';

class Routes extends Component {

    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/" component={App} exact />
                    <Route path="/services" component={Services} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;