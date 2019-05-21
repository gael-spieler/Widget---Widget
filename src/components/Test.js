import React, {Component} from 'react';
import '../index.scss'

class Test extends Component {

    state = {
        content: '<h1>Hello World</h1>'
    }

    load = (content) => {
        var body = window.document.body,
            div = window.document.createElement('div');
        div.id = 'widget';
        div.className = 'box'
        div.innerHTML = content; 
        body.appendChild(div);
      }

    
    render() {
        return (
            <div>
                {this.load(this.state.content)}
            </div>
        );
    }
}

export default Test;