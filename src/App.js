import React, {Component} from 'react';
import './index.scss';
import Icon from './components/Icon.jsx';
import Widget from './components/Widget.jsx';

class App extends Component {

  state = {
    hidden: true,
    id: ''
  }

  componentWillMount() {
    console.log(this.props.match.params.id)
    let id = this.props.match.params.id
    this.setState({id})
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
        {this.state.hidden === false && <Widget showWidget={this.showWidget} hideWidget={this.hideWidget} id={this.state.id}/>}
        
      </div>
    );

  }
}

export default App;
