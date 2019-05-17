import React, {Component} from 'react';
import './index.scss';
import Icon from './components/Icon.jsx';
import Widget from './components/Widget.jsx';

class App extends Component {

  state = {
    hidden: true,
  }

  showWidget = () => {
      const hidden = false;
      this.setState({hidden});
  }

  hideWidget = () => {
    const hidden = true;
    this.setState({hidden});
  }
  render() {
    return (
      <div>
        {this.state.hidden === true && <Icon showWidget={this.showWidget} hideWidget={this.hideWidget} />}
        {this.state.hidden === false && <Widget showWidget={this.showWidget} hideWidget={this.hideWidget} />}
        
      </div>
    );

  }
}

export default App;
