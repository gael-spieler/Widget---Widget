import React from 'react';
import './index.scss';
import icon from './img/widget_icon.png';
import bg from './img/bg.png';

function App() {

  var bgStyle = {
    backgroundImage: `url(${bg})`
  }
  
  return (
    <div>
      <div className="wrapper wrapper-bg" style={bgStyle}>
        <div className="icon">
            <a href="/services">
                <img src={icon} alt="Widget Icon"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default App;
