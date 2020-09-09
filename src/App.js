import React, { Component } from 'react';
import Practitioner from './Screens/Practitioner';

class App extends Component {
  state = {
  color: 'red'
}



render(){
  return (
  
  //   <span className="react-custom-trigger">choose color</span>
 
    <Practitioner/>
  )
}
 
}

export default App;
