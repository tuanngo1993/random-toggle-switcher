import React from "react";

import './App.css';

import 'semantic-ui-css/semantic.min.css';
import ExampleToggle from "./Components/Switcher/Switcher";

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <ExampleToggle />
      </div>
    );
  }
} 

export default App;
