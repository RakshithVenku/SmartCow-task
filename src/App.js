import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './Components/Home';
import TaskOne from './Components/Taskone/TaskOne';
import TaskTwo from './Components/Tasktwo/TaskTwo';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/taskone" component={TaskOne} />
        <Route exact path="/tasktwo" component={TaskTwo} />
      </Router>
    </div>
  );
}

export default App;